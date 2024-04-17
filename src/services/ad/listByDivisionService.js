const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

const listByDivisionService = async (req, dataModel)=>{
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
        let divisionID = new ObjectId(req.params.divisionID);

        let data = await dataModel.aggregate([
            {$match:{divisionID:divisionID}},{$skip:skipRow},{$limit:perPage},
            {$lookup:{from:"districts",localField:"districtID", foreignField:"_id" , as:"district"}},
            {$unwind:"$district"},
            {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id" , as:"category"}},
            {$unwind:"$category"},
            {$project:{updatedAt:0,userEmail:0, model:0,
                    districtID:0,divisionID:0,categoryID:0,authenticity:0,
                    mobile:0,status:0,description:0,"district._id":0,"category._id":0,
                    condition:0,edition:0}}

        ]);
        let totalCount = await dataModel.aggregate([{$match:{divisionID:divisionID}}])
        return {status:"success",data:data,total:totalCount.length};

    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = listByDivisionService;