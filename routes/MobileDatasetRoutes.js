const router = require("express").Router(); 

const mobileDataset = require("../controllers/MobileDatasetController");

router.get("/showMobileDataset",mobileDataset.showMobileDataset);

module.exports = router