
const adModel = require("../../models/adModel");
const userModel = require("../../models/userModel");
const categoryModel = require("../../models/categoryModel");

const countService = async (req)=>{
    try {
       let userCount = await userModel.aggregate([{$match:{}}]);
       let adCount = await adModel.aggregate([{$match:{}}]);
       let categoryCount = await categoryModel.aggregate([{$match:{}}]);
       return {status:"success" , user:userCount.length , ads:adCount.length , categories: categoryCount.length}
    }
    catch (e) {
        return {status:"fail"}
    }
}
module.exports = countService;