const express = require('express')
const router = express.Router()
const generateFile = require('../docxtemplater/index')

router.post('/generate-file', (req, res, next) => {
  generateFile(req.body)
  res.send({ res: 'good' })
})

module.exports = router