/**
 * Created by tung on 12/22/16.
 */

export default function connectDB() {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://api:api@ds141088.mlab.com:41088/iot')

  return mongoose
}

