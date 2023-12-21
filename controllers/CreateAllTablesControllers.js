const { MobileDatasetTable } = require("../models/MobileDatasetModel");

async function createMobileDatasetTable(req,res){
    await MobileDatasetTable();
    res.send("Mobile dataset Table created");
}

module.exports = {
    createMobileDatasetTable
}


