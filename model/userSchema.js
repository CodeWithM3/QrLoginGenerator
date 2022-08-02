const mongoose = require('mongoose')
require('./statics/ScholarshipSchemaLogin')
const {v4: uuid} = require('uuid')
const UserSchema = new mongoose.Schema({
UserID: {
    type: String,
    id: true,
    index: true,
    default: uuid, 
    unique: true
},
firstname:{
    type: String,
    required: true,
    lowercase: true
},

lastname: {
    type: String,
    required: true,
    lowercase: true
},
email:{
    type: String,
    required: true,
    lowercase: true,
    unique: true
}
})


module.exports = QR_Scanner = mongoose.model('user', UserSchema)

const ex_params = {
    redis_bus = process.env.REDIS
}

