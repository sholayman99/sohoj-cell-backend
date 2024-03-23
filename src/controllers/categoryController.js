const categoryModel = require("../models/categoryModel");
const adModel = require("../models/adModel");
const listItemService = require("../services/common/listItemService");
const listByCategoryService = require("../services/ad/listByCategoryService");


exports.categoryList = async(req,res)=>{
    let data = await listItemService(req,categoryModel);
    res.status(200).json(data);
}

exports.listByCategory = async (req,res)=>{
    let data = await listByCategoryService(req,adModel);
    res.status(200).json(data);
}