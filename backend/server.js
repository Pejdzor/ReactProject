const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()

let app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

let sql=require('./db.js')

app.get("/",(req,res)=>{
    res.send({status:"OK"})
})

app.listen(process.env.PORT,function(){
    console.log("Backend API listening on port "+process.env.PORT)
})