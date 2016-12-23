import { Router } from 'express'
import { Promise } from 'bluebird'
import mongoose from 'mongoose'
const router = new Router()

import Humidity from './database/schema/humidity'
import Temperature from './database/schema/temperature'

// Remove this


Promise.promisifyAll(mongoose) // key part - promisification


function findMeasurements(req, res) {
  Promise.props({
    temperatureMeasurements: Temperature.find().sort({ _id: 1 }).limit(10).execAsync(),
    humidityMeasurements: Humidity.find().sort({ _id: 1 }).limit(10).execAsync(),
  })
    .then((results) => {

      const temMesValue = []
      const tempMesTimestamp = []

      results.temperatureMeasurements.map((tempMes, _) => {
        temMesValue.push(tempMes.value)
        tempMesTimestamp.push(tempMes.timestamp)
      })

      const humMesValue = []
      const humMesTimestamp = []
      results.humidityMeasurements.map((humMes, _) => {
        humMesValue.push(humMes.value)
        humMesTimestamp.push(humMes.timestamp)
      })

      const resBody = [
        {
          id: 'temp',
          timestamp: tempMesTimestamp,
          title: 'Temperature',
          value: temMesValue,
          unit: 'Degree C',
        },
        {
          id: 'hum',
          timestamp: humMesTimestamp,
          title: 'Humidity',
          value: humMesValue,
          unit: 'Percent',
        },
      ]
      console.log('serving measurements')
      return res.status(200).json(resBody)
    })
    .catch((err) => {
      throw err
    })
}

function postMeasurement(req, res) {
  const title = req.body.title
  const value = req.body.value
  const unit = req.body.unit
  const timestamp = new Date().getTime()
  let measurement = null

  switch (title) {
    case 'humidity':
      measurement = new Humidity({
        title,
        value,
        unit,
        timestamp,
      })
      break
    case 'temperature':
      measurement = new Temperature({
        title,
        value,
        unit,
        timestamp,
      })
      break
    default:
      console.log('data format is incorrect')
  }
  if (measurement !== null) {
    measurement.save((err) => {
      if (err) throw err

    })
    return res.status(200).json({ data_received: true })
  }
  return res.status(406).json({ data_received: false })
}

router.get('/', findMeasurements)

router.get('/ping', (req, res) => {
  res.status(200).json({ response: 'pong' })
})

router.post('/data', postMeasurement)

module.exports = router
