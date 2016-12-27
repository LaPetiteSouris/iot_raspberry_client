/**
 * Created by tung on 12/22/16.
 */
import connectDB from '../connection'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pressureSchema = new Schema({
  title: String,
  unit: String,
  timestamp: String,
  value: String,
})


const Pressure = connectDB().model('pressure', pressureSchema)

export default Pressure
