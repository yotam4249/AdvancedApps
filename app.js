const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECT)
const db = mongoose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>console.log("Connected to MongoDB"))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true,limit:'1mb'}))
app.use(bodyParser.json())

const postsRout = require("./routes/postsRoutes")
postsRout.use("/postsRoutes",postsRout)
const Posts = require("./models/test_Schema")
/*Posts.create({
    username:"yotam",
    password:"abc"
})*/


const test1 = require('./models/test_Schema')



app.listen(port,() =>{
    console.log("Listening to port")
})

