const deleteAccountService =async (req,dataModel)=>{
    try{
        let email = req.headers['email'];
        let id = req.params['id'];
        let data = await dataModel.deleteOne({_id:id,email:email});
        return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = deleteAccountService;