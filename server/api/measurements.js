import { Router } from 'express'
const router = new Router()

import Humidity from './database/schema/humidity'
import Temperature from './database/schema/temperature'

// Remove this
import fakeDB from '../fakeDB.js'


function postMeasurement(req, res) {

  const title = req.body.title
  const value = req.body.value
  const unit = req.body.unit
  const timestamp = req.body.timestamp
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

  measurement.save((err) => {
    if (err) throw err
    console.log('measurement created')
  })
  res.status(200).json({ data_received: true })
}

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(fakeDB)
  }, 300)
})


router.post('/data', postMeasurement)
