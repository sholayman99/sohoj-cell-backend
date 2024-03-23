const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

const adDetailsService = async (req,dataModel)=>{
    try {
        let id = new ObjectId(req.params.id);
        let data = await dataModel.aggregate([
            {$match:{_id:id}},
            {$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}},
            {$unwind:"$category"},
            {$lookup:{from:"districts",localField:"districtID",foreignField:"_id",as:"district"}},
            {$unwind:"$district"},
            {$lookup:{from:"divisions",localField:"divisionID",foreignField:"_id",as:"division"}},
            {$unwind:"$division"},
            {$project:
                    {_id:0,createdAt:0,updatedAt:0,"category._id":0,"district._id":0,"division._id":0,
                        districtID:0,divisionID:0,categoryID:0}
            }
        ]);
        return {status:"success",data:data};
    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = adDetailsService;
