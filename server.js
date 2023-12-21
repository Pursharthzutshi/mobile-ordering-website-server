const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 3001

const dotenv = require('dotenv').config()

mongoose.connect(`mongodb+srv://13phzi:BGbeXfcV4dp9LX4G@cluster0.m8wabkl.mongodb.net/mobileWebsiteDB?retryWrites=true&w=majority`).then((res)=>{
    console.log("res")
})

app.use(cors({
    origin:"https://mobile-ordering-website-client.vercel.app",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// create all tables

const createAllTablesRoutes = require("../server/routes/CreateAllTablesRoutes"); 

app.use("/createMobileDatasetTable",createAllTablesRoutes);

// fetch all mobile dataset

const showMobileDataset = require("../server/routes/MobileDatasetRoutes"); 
app.use("/showMobileDataset",showMobileDataset)

app.listen(port,()=>{
    console.log(`${port} is running`)
})