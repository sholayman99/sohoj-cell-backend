const adModel = require("../models/adModel");
const createAdService = require("../services/ad/createAdService");
const listUserAdService = require("../services/ad/listUserAdService");
const removeAdService = require("../services/ad/removeAdService");
const updateAdService = require("../services/ad/updateAdService");
const listItemService = require("../services/common/listItemService");
const updateAdStatusService = require("../services/ad/updateAdStatusService");


exports.createAd = async(req,res)=>{
   let data = await createAdService(req,adModel);
   res.status(200).json(data);
}

exports.updateAd = async(req,res)=>{
    let data = await listUserAdService(req,adModel);
    res.status(200).json(data);
 }


 exports.removeAd = async(req,res)=>{
    let data = await removeAdService(req,adModel);
    res.status(200).json(data);
 }


 exports.adList = async(req,res)=>{
    let data = await listItemService(req,adModel);
    res.status(200).json(data);
 }

 exports.listUserAd = async(req,res)=>{
    let data = await updateAdService(req,adModel);
    res.status(200).json(data);
 }

exports.updateAdStatus = async(req,res)=>{
    let data = await updateAdStatusService(req,adModel);
    res.status(200).json(data);
}