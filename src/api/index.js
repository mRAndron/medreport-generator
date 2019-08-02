import docxtemplater  from 'docxtemplater'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'
import moment from 'moment'
import { 
  URL_TEMPLATE,
  MINE_TYPE,
  TYPE_OUTPUT,
  DATE_FORMAT
} from '../constants/api'

const loadFile = (url, callback) => {
  JSZipUtils.getBinaryContent(url, callback)
}

export const generateFile = (data, patient) => {
  loadFile(URL_TEMPLATE, (error, content) => {
    if (error) {
      throw error
    }

    let diagnosesList = []
    let diagnosesRemainList = []
    let temporaryDate = null
    let doctorsList = []
    let paySum = []
    let temporarySum = 0
    //const accidentDate = moment(patient.accidentDate).format('MM DD YYYY') // TODO: CHECK FORMAT

    data.allDiagnoses.forEach((list, indexList) => {
      temporaryDate = {}
      list.slice(0, 11).forEach((element, indexElement) => {
        temporaryDate[`dai_${indexList}_${indexElement}`] = element.value
      })
      diagnosesList.push(temporaryDate)
      diagnosesRemainList.push(
        list.slice(11, list.length - 1).join()
      )
    })

    data.allDoctors.forEach((element, index) => {
      doctorsList.push({
        [`dN_${index}`]: element.name,
        [`npi_${index}`]: element.npi,
        [`sig_${index}`]: element.signature
      })
    })

    data.allServices.forEach((list, index) => {
      temporarySum = 0
      list.forEach(element => {
        temporarySum += parseInt(element.value)
      })
      paySum.push({
        [`sum_${index}`]: temporarySum
      })
    })

    const zip = new PizZip(content)
    const doc = new docxtemplater().loadZip(zip)
    doc.setOptions({ nullGetter: () => {
      return ''
    }})
    doc.setData({
      ...patient,
      ...data.allDates,

      firstServices: data.allServices[0],
      secondServices: data.allServices[1],
      thirdServices: data.allServices[2],
      fourthServices: data.allServices[3],
      fifthServices: data.allServices[4],
      sixthServices: data.allServices[5],
      seventhServices: data.allServices[6],

      firstRemain: diagnosesRemainList[0],
      secondRemain: diagnosesRemainList[1],
      thirdRemain: diagnosesRemainList[2],
      fourthRemain: diagnosesRemainList[3],
      fifthRemain: diagnosesRemainList[4],
      sixthRemains: diagnosesRemainList[5],
      seventhRemain: diagnosesRemainList[6],

      ...diagnosesList[0],
      ...diagnosesList[1],
      ...diagnosesList[2],
      ...diagnosesList[3],
      ...diagnosesList[4],
      ...diagnosesList[5],
      ...diagnosesList[6],

      ...doctorsList[0],
      ...doctorsList[1],
      ...doctorsList[2],
      ...doctorsList[3],
      ...doctorsList[4],
      ...doctorsList[5],
      ...doctorsList[6],

      ...paySum[0],
      ...paySum[1],
      ...paySum[2],
      ...paySum[3],
      ...paySum[4],
      ...paySum[5],
      ...paySum[6],
    })

    try {
      doc.render()
    }
    catch (error) {
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      }
      console.log(JSON.stringify({ error: e }))
      throw error
    }

    const output = doc.getZip().generate({
      type: TYPE_OUTPUT,
      mimeType: MINE_TYPE,
    })
    const dateTimeCreate = moment(Date.now()).format(DATE_FORMAT)
    const outputName = `report_${ dateTimeCreate }.docx`
    saveAs(output, outputName)
  })
}