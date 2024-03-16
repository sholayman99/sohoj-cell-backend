const districtModel = require('../models/districtModel');
const listItemService = require('../services/common/listItemService');

exports.districtList = async(req,res)=>{
    let data = await listItemService(req,districtModel);
    res.status(200).json(data);
}