const db = require('../database/config')

class SensorController {
  async sendData({ body }, res) {
    const query = `INSERT INTO sensor_data(temperature) VALUES(${body.temperature});`

    try {
      await db.execute(query)

      res.json({ query: 'ok' })
    } catch (e) {
      res.status(422).json({ query: 'not ok' })
    }
  }

  async getData(req, res) {
    const query = `SELECT * FROM sensor_data;`

    try {
      const data = await db.execute(query)

      res.json(data)
    } catch (e) {
      res.status(404).json({ query: 'not ok' })
    }
  }
}

module.exports = new SensorController()
