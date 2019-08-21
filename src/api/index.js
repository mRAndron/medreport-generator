import docxtemplater from 'docxtemplater'
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
  CODE_99213,
} from '../constants/api'

const loadFile = (url, callback) => {
  JSZipUtils.getBinaryContent(url, callback)
}

export const generateFile = (data, patient, countDays) => {
  loadFile(
    `${process.env.REACT_APP_URL_DOCX}${countDays}.docx`,
    (error, content) => {
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

      patient.accidentDate = `${patient.accidentDate.substr(
        0,
        2
      )} ${patient.accidentDate.substr(2, 2)} ${patient.accidentDate.substr(
        4,
        4
      )}`

      propsData.allDiagnoses.forEach((list, indexList) => {
        temporaryDate = {}
        list.slice(0, 11).forEach((element, indexElement) => {
          temporaryDate[`dai_${indexList}_${indexElement}`] = element.value
        })
        diagnosesList.push(temporaryDate)
        diagnosesRemainList.push(list.slice(11, list.length - 1).join())
      })

      propsData.allDoctors.forEach((element, index) => {
        doctorsList.push({
          [`dN_${index}`]: element.name,
          [`npi_${index}`]: element.npi,
          [`sig_${index}`]: element.signature,
        })
      })

      propsData.allServices.forEach((list, index) => {
        temporarySum = 0
        list.forEach((element, number) => {
          element.value = element.value.replace(`${element.label}_`, '')
          temporarySum += parseInt(element.value)
          if (
            element.label === CODE_97110 &&
            list.find(elem => elem.label === CODE_97530) !== undefined
          ) {
            propsData.allServices[index][number].label = `${CODE_97110} 59`
          } else if (
            element.label === CODE_97140 &&
            list.find(
              elem =>
                elem.label === CODE_98940 ||
                elem.label === CODE_98941 ||
                elem.label === CODE_98942
            ) !== undefined
          ) {
            propsData.allServices[index][number].label = `${CODE_97140} 59`
          } else if (
            (element.label === CODE_99202 ||
              element.label === CODE_99203 ||
              element.label === CODE_99212 ||
              element.label === CODE_99213) &&
            propsData.allServices[index].length > 1
          ) {
            propsData.allServices[index][number].label = `${element.label} 25`
          }
        })
        paySum.push({
          [`sum_${index}`]: temporarySum,
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
      doc.setOptions({
        nullGetter: () => {
          return ''
        },
      })
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
        eigthServices: propsData.allServices[7],
        ninethServices: propsData.allServices[8],
        tenthServices: propsData.allServices[9],
        eleventhServices: propsData.allServices[10],
        twServices: propsData.allServices[11],
        trServices: propsData.allServices[12],
        foServices: propsData.allServices[13],
        fiServices: propsData.allServices[14],
        siServices: propsData.allServices[15],
        seServices: propsData.allServices[16],
        enServices: propsData.allServices[17],
        niServices: propsData.allServices[18],
        tweServices: propsData.allServices[19],
        twoServices: propsData.allServices[20],
        twtServices: propsData.allServices[21],
        twfrServices: propsData.allServices[22],
        twfoServices: propsData.allServices[23],
        twfiServices: propsData.allServices[24],

        firstRemain: diagnosesRemainList[0],
        secondRemain: diagnosesRemainList[1],
        thirdRemain: diagnosesRemainList[2],
        fourthRemain: diagnosesRemainList[3],
        fifthRemain: diagnosesRemainList[4],
        sixthRemain: diagnosesRemainList[5],
        seventhRemain: diagnosesRemainList[6],
        eigthRemain: diagnosesRemainList[7],
        ninethRemain: diagnosesRemainList[8],
        tenthRemain: diagnosesRemainList[9],
        eleventhRemain: diagnosesRemainList[10],
        twRemain: diagnosesRemainList[11],
        trRemain: diagnosesRemainList[12],
        foRemain: diagnosesRemainList[13],
        fiRemain: diagnosesRemainList[14],
        siRemain: diagnosesRemainList[15],
        seRemain: diagnosesRemainList[16],
        enRemain: diagnosesRemainList[17],
        niRemain: diagnosesRemainList[18],
        tweSRemain: diagnosesRemainList[19],
        twoRemain: diagnosesRemainList[20],
        twtRemain: diagnosesRemainList[21],
        twfrRemain: diagnosesRemainList[22],
        twfoRemain: diagnosesRemainList[23],
        twfiRemain: diagnosesRemainList[24],

        ...diagnosesList[0],
        ...diagnosesList[1],
        ...diagnosesList[2],
        ...diagnosesList[3],
        ...diagnosesList[4],
        ...diagnosesList[5],
        ...diagnosesList[6],
        ...diagnosesList[7],
        ...diagnosesList[8],
        ...diagnosesList[9],
        ...diagnosesList[10],
        ...diagnosesList[1],
        ...diagnosesList[12],
        ...diagnosesList[13],
        ...diagnosesList[14],
        ...diagnosesList[15],
        ...diagnosesList[16],
        ...diagnosesList[17],
        ...diagnosesList[18],
        ...diagnosesList[19],
        ...diagnosesList[20],
        ...diagnosesList[21],
        ...diagnosesList[22],
        ...diagnosesList[23],
        ...diagnosesList[24],

        ...doctorsList[0],
        ...doctorsList[1],
        ...doctorsList[2],
        ...doctorsList[3],
        ...doctorsList[4],
        ...doctorsList[5],
        ...doctorsList[6],
        ...doctorsList[7],
        ...doctorsList[8],
        ...doctorsList[9],
        ...doctorsList[10],
        ...doctorsList[11],
        ...doctorsList[12],
        ...doctorsList[13],
        ...doctorsList[14],
        ...doctorsList[15],
        ...doctorsList[16],
        ...doctorsList[17],
        ...doctorsList[19],
        ...doctorsList[20],
        ...doctorsList[21],
        ...doctorsList[22],
        ...doctorsList[23],
        ...doctorsList[24],

        ...paySum[0],
        ...paySum[1],
        ...paySum[2],
        ...paySum[3],
        ...paySum[4],
        ...paySum[5],
        ...paySum[6],
        ...paySum[7],
        ...paySum[8],
        ...paySum[9],
        ...paySum[10],
        ...paySum[11],
        ...paySum[12],
        ...paySum[13],
        ...paySum[14],
        ...paySum[15],
        ...paySum[16],
        ...paySum[17],
        ...paySum[18],
        ...paySum[19],
        ...paySum[20],
        ...paySum[21],
        ...paySum[22],
        ...paySum[23],
        ...paySum[24],
      })

      try {
        doc.render()
      } catch (error) {
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
      const outputName = `report_${dateTimeCreate}.docx`
      saveAs(output, outputName)
    }
  )
}
