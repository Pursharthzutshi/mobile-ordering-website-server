const mongoose = require("mongoose")

const mobileDatasetTableSchema = new mongoose.Schema({
    image:{
        type:String,
    }
    ,name:{
        type:String,
    },
    price:{
        type:Number,
    },
    processor:{
        type:String,
    },
    type:{
        type:String
    },
    memory:{
        type:String,
    },
    OS:{
        type:String
    },

})


const MobileDatasetTable = mongoose.model("MobileDatasetTable",mobileDatasetTableSchema,"MobileDatasetTable");

module.exports = {
    MobileDatasetTable
}