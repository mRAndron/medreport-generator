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
} from '../constants/Api'

const loadFile = (url,callback) => {
  JSZipUtils.getBinaryContent(url,callback)
}

export const generateFile = data => {
  loadFile(URL_TEMPLATE, (error,content) => {
    if (error) {
      throw error
    }

    const zip = new PizZip(content)
    const doc = new docxtemplater().loadZip(zip)

    doc.setData({
      ...data
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
      console.log(JSON.stringify({error: e}))
      throw error
    }

    const output = doc.getZip().generate({
      type: TYPE_OUTPUT,
      mimeType: MINE_TYPE,
    })
    const dateTimeCreate = moment(Date.now()).format(DATE_FORMAT)
    const outputName = `report_${dateTimeCreate}.docx`
    saveAs(output, outputName)
  })
}