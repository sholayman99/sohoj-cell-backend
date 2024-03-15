const dataModel = require("../models/userModel");
const createUser = require("../services/user/createUser");
const loginUser = require("../services/user/loginUser");


exports.registration = async(req,res)=>{
    let data = await createUser(req,dataModel);
    res.status(200).json(data);
}


exports.login = async(req,res)=>{
    let data =await loginUser(req,dataModel);
    res.status(200).json(data);
}