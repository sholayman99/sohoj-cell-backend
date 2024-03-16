const divisionModel = require("../models/divisionModel");
const listItemService = require("../services/common/listItemService");

exports.divisionList = async(req,res)=>{
    let data = await listItemService(req,divisionModel);
   res.status(200).json(data);
}