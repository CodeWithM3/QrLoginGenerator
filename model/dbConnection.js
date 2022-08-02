const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async()=>{
try {
   await  mongoose.connect(process.env.MONGODB_URI)
   console.log('MongoDb is connected successfully')
} catch (error) {
    console.error('MongoDb is not connected')
}
}

module.exports = connectDb