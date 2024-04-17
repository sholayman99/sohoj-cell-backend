const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    fullName:{type:String , required:true},
    email:{type:String , required:true, unique:true},
    password:{type:String , required:true},
    mobile:{type:String , required:true},
    role:{type:String , required:true , default:'user'},
    photo:{type:String}
},
{timestamps:true,versionKey:false});

const userModel = mongoose.model("users",dataSchema);

module.exports = userModel ;