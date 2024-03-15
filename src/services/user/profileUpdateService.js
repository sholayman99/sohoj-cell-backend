const profileUpdateService = async(req,dataModel)=>{
    try{
         let email = req.headers['email'];
         let reqBody = req.body;
         let data = await dataModel.updateOne({email:email},reqBody);
         return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = profileUpdateService;