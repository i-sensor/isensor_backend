const { Router } = require('express')
const router = Router()
const SensorController = require('./sensor.controller')

router.post('/', SensorController.sendData)
router.get('/data', SensorController.getData)

module.exports = router
