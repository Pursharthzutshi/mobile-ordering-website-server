const MobileDatasetTable = require("../models/MobileDatasetModel").MobileDatasetTable;


async function showMobileDataset(req,res){

    const name = req.query.name || "";

    const type = req.query.type || "";

    const memory = req.query.memory || "";
    
    // const lowPrice = req.query.lowPrice ;
    
    const highPrice = req.query.highPrice || 0;

    const processor = req.query.processor || "";

    const OS = req.query.OS || "";

    const queryObject =
 {   name:{
        $regex:name,
        $options:"i"
    },
    type:{
        $regex:type,
        $options:"i"
    },
    processor:{
        $regex:processor,
        $options:"i"
    },
    memory:{
        $regex:memory,
        $options:"i"
    },
    OS:{
        $regex:OS,
        $options:"i"
    },
}

if(highPrice !== undefined){
    queryObject.price = {
        $gte:highPrice // >
    }
}

// if(lowPrice !== undefined && highPrice !== undefined){
//     queryObject.price = {
//         $lte:highPrice, // <
//         $gte:lowPrice // >
//     }
// }

    const mobileDataset = await MobileDatasetTable.find(queryObject);

    if(mobileDataset){
        res.send(mobileDataset);    

    }else{
        res.json({err:"Error"});    

    }
}

module.exports = {
    showMobileDataset
}