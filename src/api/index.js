import docxtemplater  from 'docxtemplater'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'
import moment from 'moment'
import {
  MINE_TYPE,
  TYPE_OUTPUT,
  DATE_FORMAT,
  CODE_97110,
  CODE_97530,
  CODE_97140,
  CODE_98940,
  CODE_98941,
  CODE_98942,
  CODE_99202,
  CODE_99203,
  CODE_99212,
  CODE_99213
} from '../constants/api'

const loadFile = (url, callback) => {
  JSZipUtils.getBinaryContent(url, callback)
}

export const generateFile = (data, patient) => {
  loadFile(process.env.REACT_APP_URL_DOCX, (error, content) => {
    if (error) {
      throw error
    }

    let propsData = data

    let diagnosesList = []
    let diagnosesRemainList = []
    let temporaryDate = null
    let doctorsList = []
    let paySum = []
    let temporarySum = 0
    //const accidentDate = moment(patient.accidentDate).format('MM DD YYYY') // TODO: CHECK FORMAT

    propsData.allDiagnoses.forEach((list, indexList) => {
      temporaryDate = {}
      list.slice(0, 11).forEach((element, indexElement) => {
        temporaryDate[`dai_${indexList}_${indexElement}`] = element.value
      })
      diagnosesList.push(temporaryDate)
      diagnosesRemainList.push(
        list.slice(11, list.length - 1).join()
      )
    })

    propsData.allDoctors.forEach((element, index) => {
      doctorsList.push({
        [`dN_${index}`]: element.name,
        [`npi_${index}`]: element.npi,
        [`sig_${index}`]: element.signature
      })
    })

    propsData.allServices.forEach((list, index) => {
      temporarySum = 0
      list.forEach((element, number) => {
        element.value = element.value.replace(`${element.label}_`, '')
        temporarySum += parseInt(element.value)
        if ((element.label === CODE_97110) && 
            (list.find(elem => elem.label === CODE_97530) !== undefined)) {
          propsData.allServices[index][number].label = `${CODE_97110} 59`
        } else if ((element.label === CODE_97140) && 
                   (list.find(elem => ((elem.label === CODE_98940) || 
                   (elem.label === CODE_98941) || 
                   (elem.label === CODE_98942) )) !== undefined)) {
          propsData.allServices[index][number].label = `${CODE_97140} 59`
        } else if (((element.label === CODE_99202) || (element.label === CODE_99203) ||
                   (element.label === CODE_99212) || (element.label === CODE_99213)) && 
                   propsData.allServices[index].length > 1) {
          propsData.allServices[index][number].label = `${element.label} 25`
        }
      })
      paySum.push({
        [`sum_${index}`]: temporarySum
      })
    })

    const offices = {}
    let indexSub = null
    data.allOffices.forEach((element, index) => {
      indexSub = element.search(/JACKSONVILLE/i)
      offices[`of_${index}_1`] = element.substr(0, indexSub)
      offices[`of_${index}_2`] = element.substr(indexSub + 1)
    })

    const zip = new PizZip(content)
    const doc = new docxtemplater().loadZip(zip)
    doc.setOptions({ nullGetter: () => {
      return ''
    }})
    doc.setData({
      ...patient,
      ...propsData.allDates,
      ...offices,

      firstServices: propsData.allServices[0],
      secondServices: propsData.allServices[1],
      thirdServices: propsData.allServices[2],
      fourthServices: propsData.allServices[3],
      fifthServices: propsData.allServices[4],
      sixthServices: propsData.allServices[5],
      seventhServices: propsData.allServices[6],

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