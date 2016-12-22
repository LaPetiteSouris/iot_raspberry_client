/**
 * Created by tung on 12/22/16.
 */
import connectDB from '../connection'
const Schema = connectDB().Schema

const humiditySchema = new Schema({
  title: String,
  unit: String,
  timestamp: String,
  value: String

})


const Humidity = connectDB().model('Humidity', humiditySchema)

export default Humidity
