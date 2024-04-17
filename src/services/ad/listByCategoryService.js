const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

const listByCategoryService = async (req, dataModel)=>{
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
        let categoryID = new ObjectId(req.params.categoryID);


       let data = await dataModel.aggregate([
          {$match:{categoryID:categoryID}},{$skip:skipRow},{$limit:perPage},
          {$lookup:{from:"districts",localField:"districtID", foreignField:"_id" , as:"district"}},
          {$unwind:"$district"},
          {$lookup:{from:"divisions",localField:"divisionID", foreignField:"_id" , as:"division"}},
          {$unwind:"$division"},
          {$project:{updatedAt:0,userEmail:0, model:0,
                  districtID:0,divisionID:0,categoryID:0,authenticity:0,
                  mobile:0,status:0,description:0,"district._id":0,"division._id":0,
                  condition:0,edition:0}}

      ]);
       let totalCount = await dataModel.aggregate([{$match:{categoryID:categoryID}}])
      return {status:"success",data:data , total:totalCount.length};

    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = listByCategoryService;