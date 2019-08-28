import docxtemplater from 'docxtemplater'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import DocxMerger from 'docx-merger'
import moment from 'moment'
import {
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

const newLineMapping = {
  0: 0,
  1: 2,
  2: 4,
  3: 6,
  4: 8,
  5: 10,
}

const loadFile = (url, callback) => {
  JSZipUtils.getBinaryContent(url, callback)
}

const renderData = (content, data) => {
  let zip = new JSZip(content)
  let doc = new docxtemplater().loadZip(zip)

  doc.setOptions({
    nullGetter: () => {
      return ''
    },
  })

  doc.setData(data)

  try {
    doc.render()
  } catch (error) {
    const e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    }
    console.log(JSON.stringify({ error: e })) // TODO: DELETE
    throw error
  }

  return doc.getZip().generate({ type: 'arraybuffer' })
}

const generateEmptyLine = countLines => {
  const result = []
  let countLine = 6 - countLines
  for (let j = 0; j < newLineMapping[countLine]; j++) {
    result.push({})
  }
  return result
}

const calculateSum = services => {
  let sum = 0
  services.forEach(element => {
    sum += parseInt(element.value)
  })
  return sum
}

export const generateFile = (data, patient, countDays) => {
  const propsData = data

  let diagnosesList = []
  let diagnosesRemainList = []
  let temporaryDate = null
  let doctorsList = []
  // TODO: FIX DATE FORMAT
  patient.accidentDate = `${patient.accidentDate.substr(
    0,
    2
  )} ${patient.accidentDate.substr(2, 2)} ${patient.accidentDate.substr(4, 4)}`

  propsData.allDiagnoses.forEach((list, indexList) => {
    temporaryDate = {}
    list.slice(0, 11).forEach((element, indexElement) => {
      temporaryDate[`dai_${indexElement}`] = element.value
    })
    diagnosesList.push(temporaryDate)
    diagnosesRemainList.push(list.slice(11, list.length - 1).join())
  })

  propsData.allDoctors.forEach((element, index) => {
    doctorsList.push({
      [`dN_`]: element.name,
      [`npi_`]: element.npi,
      [`sig_`]: element.signature,
    })
  })

  propsData.allServices.forEach((list, index) => {
    list.forEach((element, number) => {
      element.value = element.value.replace(`${element.label}_`, '')
      if (
        element.label === CODE_97110 &&
        list.find(elem => elem.label === CODE_97530) !== undefined
      ) {
        propsData.allServices[index][number]['pfx'] = ` 59`
      } else if (
        element.label === CODE_97140 &&
        list.find(
          elem =>
            elem.label === CODE_98940 ||
            elem.label === CODE_98941 ||
            elem.label === CODE_98942
        ) !== undefined
      ) {
        propsData.allServices[index][number]['pfx'] = ` 59`
      } else if (
        (element.label === CODE_99202 ||
          element.label === CODE_99203 ||
          element.label === CODE_99212 ||
          element.label === CODE_99213) &&
        propsData.allServices[index].length > 1
      ) {
        propsData.allServices[index][number]['pfx'] = ` 25`
      } else {
        propsData.allServices[index][number]['pfx'] = ''
      }
    })
  })

  const offices = []
  let indexSub = null
  data.allOffices.forEach((element, index) => {
    indexSub = element.search(/JACKSONVILLE/i)
    offices.push({
      of_1: element.substr(0, indexSub),
      of_2: element.substr(indexSub + 1),
    })
  })

  loadFile(`${process.env.REACT_APP_URL_DOCX}${1}.docx`, (error, content) => {
    if (error) {
      throw error
    }

    let result = []

    for (let i = 0; i < countDays; i++) {
      let servicesMain = propsData.allServices[i].filter(
        (element, index) => index <= 5
      )
      let insertData = {
        ...patient,
        services: servicesMain,
        remain: diagnosesRemainList[i],
        ...diagnosesList[i],
        ...doctorsList[i],
        sum_: calculateSum(servicesMain),
        dv: propsData.allDates[i],
        ...offices[i],
      }

      if (propsData.allServices[i].length <= 6) {
        insertData['nl'] = generateEmptyLine(propsData.allServices[i].length)
      }

      result.push(renderData(content, insertData))

      if (propsData.allServices[i].length > 6) {
        const servicesRemain = propsData.allServices[i].filter(
          (element, index) => index > 5
        )
        insertData['nl'] = generateEmptyLine(servicesRemain.length)
        insertData['services'] = servicesRemain
        insertData['sum_'] = calculateSum(servicesRemain)
        result.push(renderData(content, insertData))
      }
    }

    var docx = new DocxMerger({}, result)
    const dateTimeCreate = moment(Date.now()).format(DATE_FORMAT)
    const outputName = `report_${dateTimeCreate}.docx`
    docx.save('blob', function(data) {
      saveAs(data, outputName)
    })
  })
}
