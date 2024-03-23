const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;


const filterAdService = async (req,dataModel)=>{
    try {
        let matchConditions ={};

        if(req.body['categoryID']){
            matchConditions.categoryID = new ObjectId( req.body['categoryID']);
        }
        let matchStage ={$match:matchConditions};

        let addFieldStage ={
            $addFields:{numericPrice:{$toInt:"$price"}}
        }
        let priceMin = parseInt(req.body['priceMin']);
        let priceMax = parseInt(req.body['priceMax']);
        let priceMatchConditions ={};
        if(!isNaN(priceMin)){
            priceMatchConditions['numericPrice'] = {$gte:priceMin};
        }
        if(!isNaN(priceMax)){
            priceMatchConditions['numericPrice'] ={...( priceMatchConditions['numericPrice'])||{},$lte:priceMax}
        }
        let priceMatchStage ={$match:priceMatchConditions};
        let joinWithCategoryStage = {
            $lookup:{ from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"}
        };
        let unwindCategoryStage = {$unwind:"$category"};
        let projectionStage = {
            $project:{ "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0 }
        };

        let data = await dataModel.aggregate([
            matchStage,addFieldStage,priceMatchStage,joinWithCategoryStage
            ,unwindCategoryStage,projectionStage
        ]);
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"fail" , data:e}
    }
}

module.exports = filterAdService;