const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;


const filterAdService = async (req,dataModel)=>{
    try {
        // let pageNo = Number(req.params.pageNo);
        // let perPage = Number(req.params.perPage);
        // let skipRow = (pageNo-1)*perPage;

        let matchConditions ={};

        if(req.body['categoryID']){
            matchConditions.categoryID = new ObjectId( req.body['categoryID']);
        }
        if(req.body['districtID']){
            matchConditions.districtID = new ObjectId(req.body['districtID']);
        }
        if(req.body['divisionID']){
            matchConditions.divisionID = new ObjectId(req.body['divisionID'])
        }
        let matchStage ={$match:matchConditions};

        let joinWithCategoryStage = {
            $lookup:{ from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"}
        };
        let unwindCategoryStage = {$unwind:"$category"};
        let joinWithDistrictStage = {
            $lookup:{ from:"districts" , foreignField:"_id" , localField:"districtID" , as:"district"}
        };
        let unwindDistrictStage = {$unwind:"$district"};
        let joinWithDivisionStage = {
            $lookup:{ from:"divisions" , foreignField:"_id" , localField:"divisionID" , as:"division"}
        };
        let unwindDivisionStage = {$unwind:"$division"};
        let projectionStage = {
            $project:{ "brand._id":0 , "category._id":0 , categoryID:0 ,
             districtID:0,divisionID:0,"district._id" :0,"division._id" :0,status:0}
        };

        let data = await dataModel.aggregate([
            matchStage,joinWithCategoryStage,unwindCategoryStage,joinWithDistrictStage,unwindDistrictStage,
            joinWithDivisionStage,unwindDivisionStage,projectionStage]);

        return {status:"success" , data:data}
    }catch (e) {
        return {status:"fail" , data:e}
    }
}

module.exports = filterAdService;