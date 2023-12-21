const router = require("express").Router(); 

const createTable = require("../controllers/CreateAllTablesControllers");

router.get("/createMobileDatasetTable",createTable.createMobileDatasetTable);

module.exports = router
