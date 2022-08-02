const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./route/apiRoute')
require('dotenv').config()
const connectDb = require('./model/dbConnection')

const app = express()
const PORT = process.env.PORT

connectDb()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', apiRoutes)







app.listen(PORT, ()=>{console.log(`Server is running ${PORT}`)})