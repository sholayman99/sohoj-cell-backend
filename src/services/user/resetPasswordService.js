const resetPassService = async(req,dataModel)=>{
    try{
        let password = req.body['password'];
        let email = req.body['email'];

        let userCount = await dataModel.aggregate([{$match:{email:email}}]);
        if(userCount.length === 1){
          let data = await dataModel.updateOne({email:email},{password:password});
          return {status:'success',data:data};
        }
        else{
          return {status:'fail',data:'no user found'};
        }
    }
    catch{
        return {status:'fail',data:e};
    }
}

module.exports = resetPassService;