const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId ;

const listByCategoryService = async (req,dataModel)=>{
    try {
      let categoryID = new ObjectId(req.params.categoryID);
      let data = await dataModel.aggregate([
          {$match:{categoryID:categoryID}}
      ]);
      return {status:"success",data:data};

    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = listByCategoryService;