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
const countService = require("../services/user/countService");
const removeUserService = require("../services/user/removeUserService");
const deleteAccountService = require("../services/user/deleteAccountService");


exports.registration = async(req,res)=>{
    let data = await createUserService(req,dataModel);
    res.status(200).json(data);
}


exports.login = async(req,res)=>{
    let data = await loginUserService(req,dataModel);
    let cookieOption={
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly:false
    }
    res.cookie("token",data['token'],cookieOption);
    return res.status(200).json(data);
}

exports.logout = async (req,res)=>{
    let cookieOption={
        expires: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        httpOnly:false
    }
    res.cookie("token","",cookieOption);
    return res.status(200).json({status:"success" , message:"logout successfully"});
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

exports.photoUpdate = async (req,res)=>{
    let data = await profileUpdateService(req,dataModel);
    res.status(200).json(data);
}

exports.userNameUpdate = async(req,res)=>{
    let data = await profileUpdateService(req,dataModel);
    res.status(200).json(data);
}

exports.userMobileUpdate = async (req,res)=>{
    let data = await profileUpdateService(req,dataModel);
    res.status(200).json(data);
}


exports.passwordUpdate = async (req,res)=>{
    let data = await profileUpdateService(req,dataModel);
    res.status(200).json(data);
}

exports.count = async (req,res)=>{
    let data = await countService(req);
    res.status(200).json(data);
}

exports.removeUser = async (req,res)=>{
    let data = await removeUserService(req,dataModel);
    res.status(200).json(data);
}

exports.deleteAccount = async (req,res)=>{
    let data = await deleteAccountService(req,dataModel);
    res.status(200).json(data);
}


