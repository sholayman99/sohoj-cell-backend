const dataModel = require("../models/userModel");
const createUser = require("../services/user/createUser");
const loginUser = require("../services/user/loginUser");
const profileUpdateService = require("../services/user/profileUpdate");
const userInfoService = require("../services/user/userInfo");


exports.registration = async(req,res)=>{
    let data = await createUser(req,dataModel);
    res.status(200).json(data);
}


exports.login = async(req,res)=>{
    let data =await loginUser(req,dataModel);
    res.status(200).json(data);
}

exports.update = async(req,res)=>{
    let data = await profileUpdateService(req,dataModel);
    res.status(200).json(data);
}

exports.info = async(req,res)=>{
    let data = await userInfoService(req,dataModel);
    res.status(200).json(data);
}