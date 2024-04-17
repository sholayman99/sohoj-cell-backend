const userListService = async(req,dataModel) =>{
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
        let data = await dataModel.aggregate([{$match:{}},{$skip:skipRow},{$limit:perPage},{$sort:{role:1}}]);
        let totalCount = await dataModel.aggregate([{$match:{}}]);
        return {status:'success',data:data,total:totalCount.length};

    }
    catch(e){
        return {status:'fail',data:e}
    }
}

module.exports = userListService;