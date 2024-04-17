const sliderModel = require("../models/sliderModel");
const listItemService = require("../services/common/listItemService");

exports.sliderList = async (req,res)=>{
    let data = await listItemService(req,sliderModel);
    res.status(200).json(data);
}