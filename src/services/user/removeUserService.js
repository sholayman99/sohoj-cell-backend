const removeUserService = async (req,dataModel)=>{
    try{
        let id = req.params['id'];
        let data = await dataModel.deleteOne({_id:id});
        return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = removeUserService;