const searchByKeywordService = async (req,dataModel)=>{
    try {
        let keyword = req.params['keyword'];
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
        let searchRegex = {"$regex":keyword , "$options":"i" };
        let searchParams = [
            {productName:searchRegex},{description:searchRegex},{model:searchRegex},{condition:searchRegex},
            {features:searchRegex},{brandName:searchRegex}
        ];
        let searchQuery = {$or:searchParams};
        let data = await dataModel.aggregate([{$match:searchQuery},{$skip:skipRow},{$limit:perPage},
            {$lookup:{from:"districts",localField:"districtID", foreignField:"_id" , as:"district"}},
            {$unwind:"$district"},
            {$lookup:{from:"divisions",localField:"divisionID", foreignField:"_id" , as:"division"}},
            {$unwind:"$division"},
            {$lookup:{from:"categories",localField:"categoryID", foreignField:"_id" , as:"category"}},
            {$unwind:"$category"},
            {$project:{createdAt:0,updatedAt:0,userEmail:0, model:0,
                    districtID:0,divisionID:0,categoryID:0,authenticity:0,
                    mobile:0,status:0,description:0,"district._id":0,"division._id":0,
                    "category._id":0,condition:0,edition:0}}
        ]);
        let totalCount = await dataModel.aggregate([{$match:searchQuery}]);
        return {status:"success",data:data,total:totalCount.length}
    }
    catch (e) {
        return {status:"fail",data:e}
    }
}

module.exports = searchByKeywordService;