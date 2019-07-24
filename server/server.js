const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/api', require('./routes/routes'))

app.use((req, res, next) => {
  res.status(404)
  res.send({ error: 'Not found' })
  return
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({ error: err.message })
  return
})

app.listen(process.env.port || 4000, () => {
  console.log('Server run on 4000 port.')
})