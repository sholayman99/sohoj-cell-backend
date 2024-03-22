const userListService = async(req,dataModel) =>{
    try{
        let data = await dataModel.aggregate([{$match:{}},{$sort:{role:1}}]);
        return {status:'success',data:data};

    }
    catch(e){
        return {status:'fail',data:e}
    }
}

module.exports = userListService;