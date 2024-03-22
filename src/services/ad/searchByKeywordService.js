const searchByKeywordService = async (req,dataModel)=>{
    try {
        let keyword = req.params['keyword'];
        let searchRegex = {"$regex":keyword , $options:"i" };
        let searchParams = [
            {productName:searchRegex},{description:searchRegex},{model:searchRegex},{condition:searchRegex},
            {features:searchRegex},{brandName:searchRegex}
        ];
        let searchQuery = {$or:searchParams};
        let data = await dataModel.aggregate([{$match:searchQuery}]);
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}
    }
}

module.exports = searchByKeywordService;