const emailSend = require("../../utility/emailUtility");
const otpModel = require("../../models/otpModel");

const verifyEmailService = async(req,dataModel)=>{
    try{
        let email = req.params['email'];
        let code = Math.round(Math.floor(100000+Math.random()*900000));
        let userCount = await dataModel.aggregate([{$match:{email:email}}]);
        if(userCount.length === 1){
            await emailSend(email,"Sohoj Cell Verification",`Your Otp Verification Code Is : ${code}`)
            let data = await otpModel.create({email:email,otp:code});
            return {status:'success' , data:data}
        }
        else{
            return {status:'fail' , data:"no user found!"};
        }
      }
      catch(e){
          return {status:'fail',data:e}
      }
}

module.exports = verifyEmailService;