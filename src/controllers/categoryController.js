const categoryModel = require("../models/categoryModel");
const listItemService = require("../services/common/listItemService");

exports.categoryList = async(req,res)=>{
    let data = await listItemService(req,categoryModel);
    res.status(200).json(data);
}