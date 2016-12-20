import { Router } from 'express'
const router = new Router()

// Remove this
import fakeDB from '../fakeDB.js'

router.get('/', (req, res) => {
  setTimeout(() => {
    res.status(200).json(fakeDB)
  }, 300)
})


module.exports = router
