const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    divisionName:{type:String , required:true}
},
{timestamps:true,versionKey:false});

const divisionModel = mongoose.model("divisions",dataSchema);
module.exports = divisionModel;