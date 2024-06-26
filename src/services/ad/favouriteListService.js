const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const favouriteListService = async (req,dataModel)=>{
    try {
        let email = req.headers['email'];
        let data = await  dataModel.aggregate([
            {$match:{userEmail:email}},
            {$lookup:{from:"ads",localField:"productID", foreignField:"_id" , as:"ad"}},
            {$unwind:"$ad"},
            {$lookup:{from:"districts",localField:"ad.districtID", foreignField:"_id" , as:"district"}},
            {$unwind:"$district"},
            {$lookup:{from:"divisions",localField:"ad.divisionID", foreignField:"_id" , as:"division"}},
            {$unwind:"$division"},
            {$lookup:{from:"categories",localField:"ad.categoryID", foreignField:"_id" , as:"category"}},
            {$unwind:"$category"},
            {$project:{createdAt:0,updatedAt:0,productID:0,userEmail:0, "ad.model":0,"ad._id":0,
                "ad.districtID":0,"ad.divisionID":0,"ad.categoryID":0,"ad.authenticity":0,
                "ad.mobile":0,"ad.status":0,"ad.description":0,"ad.userEmail":0,"district._id":0,"division._id":0,
                "category._id":0, "ad.condition":0,"ad.edition":0,"ad.createdAt":0,"ad.updatedAt":0}}
        ]);
        return {status:"success" , data:data};

    }
    catch (e) {
        return {status:"fail" , data:e};
    }
}

module.exports = favouriteListService;