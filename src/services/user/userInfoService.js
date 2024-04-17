const userInfoService = async(req,dataModel) =>{
    try{
      let data = await dataModel.aggregate([
        {$match:{email:req.headers['email']}},{$project:{_id:0,fullName:1,email:1,photo:1,mobile:1,role:1}}
      ]);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e}
    }
}

module.exports = userInfoService;