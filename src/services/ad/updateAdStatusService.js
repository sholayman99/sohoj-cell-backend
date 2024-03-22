const updateAdStatusService = async(req, dataModel)=>{
    try{
        let id = req.params['productID'];
        let status = req.params['status'];
        let data = await dataModel.updateOne({_id:id},{status:status});
        return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = updateAdStatusService;