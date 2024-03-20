const addModel = require("../models/adModel");
const createAddService = require("../services/ad/createAdService");
const listUserAddService = require("../services/ad/listUserAdService");
const removeAddService = require("../services/ad/removeAdService");
const updateAddService = require("../services/ad/updateAdService");
const listItemService = require("../services/common/listItemService");



exports.createAdd = async(req,res)=>{
   let data = await createAddService(req,addModel);
   res.status(200).json(data);
}

exports.updateAdd = async(req,res)=>{
    let data = await updateAddService(req,addModel);
    res.status(200).json(data);
 }


 exports.removeAdd = async(req,res)=>{
    let data = await removeAddService(req,addModel);
    res.status(200).json(data);
 }


 exports.addList = async(req,res)=>{
    let data = await listItemService(req,addModel);
    res.status(200).json(data);
 }

 exports.listUserAdd = async(req,res)=>{
    let data = await listUserAddService(req,addModel);
    res.status(200).json(data);
 }