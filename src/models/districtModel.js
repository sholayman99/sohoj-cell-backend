const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    district:{type:String , required:true}
},
{timestamps:true,versionKey:false});

const districtModel = mongoose.model("districts",dataSchema);
module.exports = districtModel;