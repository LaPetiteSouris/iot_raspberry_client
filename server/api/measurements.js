import { Router } from 'express'
import { Promise } from 'bluebird'
import mongoose from 'mongoose'
const router = new Router()

import Pressure from './database/schema/pressure'
import Temperature from './database/schema/temperature'
import Altitude from './database/schema/altitude'

Promise.promisifyAll(mongoose) // key part - promisification

function findMeasurements(req, res) {
  Promise.props({
    temperatureMeasurements: Temperature
      .find()
      .sort({ _id: 1 })
      .limit(50)
      .execAsync(),
    pressureMeasurements: Pressure
      .find()
      .sort({ _id: 1 })
      .limit(50)
      .execAsync(),
    altitudeMeasurements: Altitude
      .find()
      .sort({ _id: 1 })
      .limit(50)
      .execAsync(),
  }).then((results) => {

    const temMesValue = []
    const tempMesTimestamp = []

    results
      .temperatureMeasurements
      .map((tempMes, _) => {
        temMesValue.push(tempMes.value)
        tempMesTimestamp.push(tempMes.timestamp)
      })

    const pressureMesValue = []
    const pressureMesTimestamp = []
    results
      .pressureMeasurements
      .map((pressMes, _) => {
        pressureMesValue.push(pressMes.value)
        pressureMesTimestamp.push(pressMes.timestamp)
      })

    const altitudeMesValue = []
    const altitudeMesTimestamp = []
    results
      .altitudeMeasurements
      .map((altMes, _) => {
        altitudeMesValue.push(altMes.value)
        altitudeMesTimestamp.push(altMes.timestamp)
      })

    const resBody = [
      {
        id: 'temp',
        timestamp: tempMesTimestamp,
        title: 'Temperature',
        value: temMesValue,
        unit: 'Degree C',
      }, {
        id: 'press',
        timestamp: pressureMesTimestamp,
        title: 'Pressure',
        value: pressureMesValue,
        unit: 'hPa',
      },
      {
        id: 'altitude',
        timestamp: altitudeMesTimestamp,
        title: 'Altitude',
        value: altitudeMesValue,
        unit: 'Meter',
      },
    ]
    console.log('serving measurements')
    return res
      .status(200)
      .json(resBody)
  }).catch((err) => {
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
    case 'pressure':
      measurement = new Pressure({ title, value, unit, timestamp })
      break
    case 'temperature':
      measurement = new Temperature({ title, value, unit, timestamp })
      break
    case 'altitude':
      measurement = new Altitude({ title, value, unit, timestamp })
      break
    default:
      console.log('data format is incorrect')
  }
  if (measurement !== null) {
    measurement.save((err) => {
      if (err)
        throw err
    })

    return res
      .status(200)
      .json({ data_received: true })
  }
  return res
    .status(406)
    .json({ data_received: false })
}

router.get('/', findMeasurements)

router.get('/ping', (req, res) => {
  res
    .status(200)
    .json({ response: 'pong' })
})

router.post('/data', postMeasurement)

module.exports = router
