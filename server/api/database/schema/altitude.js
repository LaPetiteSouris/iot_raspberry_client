/**
 * Created by tung on 12/22/16.
 */
import connectDB from '../connection'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const altitudeSchema = new Schema({
  title: String,
  unit: String,
  timestamp: String,
  value: String,

})


const Altitude = connectDB().model('altitude', altitudeSchema)

export default Altitude
