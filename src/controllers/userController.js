const dataModel = require("../models/userModel");
const otpModel = require("../models/otpModel");
const profileUpdateService = require("../services/user/profileUpdateService");
const userInfoService = require("../services/user/userInfoService");
const verifyEmailService = require("../services/user/verifyEmailService");
const createUserService = require("../services/user/createUserService");
const loginUserService = require("../services/user/loginUserService");
const verifyOtpService = require("../services/user/verifyOtpService");
const resetPassService = require("../services/user/resetPasswordService");
const userListService = require("../services/user/userListService");


exports.registration = async(req,res)=>{
    let data = await createUserService(req,dataModel);
    res.status(200).json(data);
}


exports.login = async(req,res)=>{
    let data =await loginUserService(req,dataModel);
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

exports.emailVerify = async(req,res)=>{
    let data = await verifyEmailService(req,dataModel);
    res.status(200).json(data);
}

exports.otpVerify = async(req,res)=>{
    let data = await verifyOtpService(req,otpModel);
    res.status(200).json(data);
}

exports.resetPass = async(req,res)=>{
    let data = await resetPassService(req,dataModel);
    res.status(200).json(data);
}

exports.userList = async (req,res)=>{
    let data = await userListService(req,dataModel);
    res.status(200).json(data);
}