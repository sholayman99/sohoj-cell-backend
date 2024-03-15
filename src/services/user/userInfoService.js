const userInfoService = async(req,dataModel) =>{
    try{
      let data = await dataModel.aggregate([
        {$match:{email:req.headers['email']}}
      ]);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e}
    }
}

module.exports = userInfoService;