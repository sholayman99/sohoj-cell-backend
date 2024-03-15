const addModel = require("../models/addModel");
const addListService = require("../services/add/addListService");
const createAddService = require("../services/add/createAddService");
const listUserAddService = require("../services/add/listUserAddService");
const removeAddService = require("../services/add/removeAddService");
const updateAddService = require("../services/add/updateAddService");


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
    let data = await addListService(req,addModel);
    res.status(200).json(data);
 }

 exports.listUserAdd = async(req,res)=>{
    let data = await listUserAddService(req,addModel);
    res.status(200).json(data);
 }