

const verifyOtpService = async(req,dataModel)=>{
    try{
       let email = req.params['email'];
       let otp = req.params['otp'];
       let status = 0;
       let updatedStatus = 1;
       let userCount = await dataModel.aggregate([{$match:{email:email,otp:otp}}]);
       if(userCount.length === 1){
         let data = await dataModel.updateOne({email:email,otp:otp,status:status},
            {email:email,otp:otp,status:updatedStatus});
         return {status:'success',data:data};
       }
       else{
        return {status:'fail',data:'no user found'};
       }
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = verifyOtpService;