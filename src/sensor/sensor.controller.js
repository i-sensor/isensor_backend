const db = require('../database/config')

class SensorController {
  async sendData({ body }, res) {
    const { temperature, humidity, pressure, uv } = body
    const query = `INSERT INTO sensor_data(temperature, humidity, pressure, uv) VALUES (${temperature}, ${humidity}, ${pressure}, ${uv});`

    try {
      await db.execute(query)

      res.json({ query: 'ok' })
    } catch (e) {
      res.status(422).json({ query: 'not ok' })
    }
  }

  async getData(req, res) {
    const query = `SELECT temperature, humidity, pressure, uv FROM sensor_data;`

    try {
      const data = await db.execute(query)

      res.json(data[0])
    } catch (e) {
      res.status(404).json({ query: 'not ok' })
    }
  }
}

module.exports = new SensorController()
