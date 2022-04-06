const express = require('express')
const bodyParser = require('body-parser')
const sensorRouter = require('./sensor/sensor.route')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use(sensorRouter)
app.use((req, res, next) => {
  return res.status(403).json({ request: 'forbidden' })
})

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
})
