const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    productName:{type:String , required:true},
    image:{type:String},
    userEmail:{type:String,required:true},
    mobile:{type:String,required:true},
    price:{type:String,required:true},
    edition:{type:String,required:true},
    districtID:{type:mongoose.Schema.Types.ObjectId,required:true},
    divisionID:{type:mongoose.Schema.Types.ObjectId,required:true},
    categoryID:{type:mongoose.Schema.Types.ObjectId,required:true},
    condition:{type:String,required:true},
    authenticity:{type:String,required:true},
    features:{type:String,required:true},
    negotiable:{type:String,required:true},
    brandName:{type:String,required:true},
    model:{type:String,required:true},
    status:{type:String,default:"Pending"},
    description:{type:String,required:true}

},
{timestamps:true,versionKey:false});

const adModel = mongoose.model("ads",dataSchema);
module.exports = adModel;