const adModel = require("../models/adModel");
const favouriteModel = require("../models/favouriteModel");
const divisionModel = require("../models/divisionModel");
const createItemService = require("../services/common/createItemService");
const listUserAdService = require("../services/ad/listUserAdService");
const removeItemService = require("../services/common/removeItemService");
const updateAdService = require("../services/ad/updateAdService");
const updateAdStatusService = require("../services/ad/updateAdStatusService");
const favouriteListService = require("../services/ad/favouriteListService");
const searchByKeywordService = require("../services/ad/searchByKeywordService");
const adDetailsService = require("../services/ad/adDetailsService");
const filterAdService = require("../services/ad/filterAdService");
const adListService = require("../services/ad/adListService");
const findSingleAdService = require("../services/ad/findSingleAdService");
const listByStatusAdService = require("../services/ad/listByStatusAdService");
const listByDivisionService = require("../services/ad/listByDivisionService");


exports.createAd = async(req,res)=>{
   let data = await createItemService(req,adModel);
   res.status(200).json(data);
}

exports.updateAd = async(req,res)=>{
    let data = await updateAdService(req,adModel);
    res.status(200).json(data);
 }


 exports.removeAd = async(req,res)=>{
    let data = await removeItemService(req,adModel);
    res.status(200).json(data);
 }


 exports.adList = async(req,res)=>{
    let data = await adListService(req,adModel);
    res.status(200).json(data);
 }

 exports.findSingleAd = async (req,res)=>{
     let data = await findSingleAdService(req,adModel);
     res.status(200).json(data);
 }

 exports.listUserAd = async(req,res)=>{
    let data = await listUserAdService(req,adModel);
    res.status(200).json(data);
 }

exports.updateAdStatus = async(req,res)=>{
    let data = await updateAdStatusService(req,adModel);
    res.status(200).json(data);
}


exports.searchByKeyword = async (req,res)=>{
  let data = await searchByKeywordService(req,adModel);
  res.status(200).json(data);
}

exports.adDetails = async (req,res)=>{
    let data = await adDetailsService(req,adModel);
    res.status(200).json(data);
}

exports.filterAd = async (req,res)=>{
    let data = await filterAdService(req,adModel);
    res.status(200).json(data);
}

exports.createFavouriteList = async (req,res)=>{
    let data = await createItemService(req,favouriteModel);
    res.status(200).json(data);
}

exports.removeFavouriteList = async (req,res)=>{
    let data = await removeItemService(req,favouriteModel);
    res.status(200).json(data);
}

exports.favouriteList = async (req,res)=>{
    let data = await favouriteListService(req,favouriteModel);
    res.status(200).json(data);
}

exports.adByStatusList = async (req,res)=>{
    let data = await listByStatusAdService(req,adModel);
    res.status(200).json(data);
}

exports.filterByDivision = async (req,res)=>{
    let data = await listByDivisionService(req,adModel);
    res.status(200).json(data);
}




