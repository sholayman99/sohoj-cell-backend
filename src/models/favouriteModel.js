const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId , required:true},
        userEmail:{type:String , required:true},
    },
    {versionKey:false,timestamps:true});

const favouriteModel = mongoose.model("favourites",dataSchema);