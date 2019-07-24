const JSZip = require('jszip')
const Docxtemplater = require('docxtemplater')
const fs = require('fs')
const path = require('path')

const generateFile = (data) => {
  const content = fs.readFileSync(
    path.resolve(__dirname, './tag-example.docx'), 'binary'
  )
  const zip = new JSZip(content)
  const doc = new Docxtemplater()

  doc.loadZip(zip)

  doc.setData(data)

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

  const buf = doc.getZip().generate({
    type: 'nodebuffer'
  })

  fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf)
}

module.exports = generateFile