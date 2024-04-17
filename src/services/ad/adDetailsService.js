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
            {$project:{
                _id:1,
                   createdAt:1,updatedAt:1,productName:1,image:1,price:1,condition:1,brandName:1,authenticity:1,
                    features:1,model:1,description:1,"district.districtName":1,"division.divisionName":1,
                    "category.categoryName":1,negotiable:1,mobile:1,userEmail:1
                }}
        ]);
        return {status:"success",data:data};
    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = adDetailsService;
