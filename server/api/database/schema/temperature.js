/**
 * Created by tung on 12/22/16.
 */
import connectDB from '../connection'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const temperatureSchema = new Schema({
  title: String,
  unit: String,
  timestamp: String,
  value: String,

})


const Temperature = connectDB().model('Temperature', temperatureSchema)

export default Temperature
