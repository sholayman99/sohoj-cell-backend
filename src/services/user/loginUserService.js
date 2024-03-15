const createToken = require("../../utility/tokenUtility");

const loginUserService = async(req,dataModel)=>{
    try{
      let reqBody = req.body;
      let data = await dataModel.aggregate([
        {$match:reqBody},{$project:{_id:0,fName:1,lName:1,email:1,password:1}}
      ]);
      if(data.length === 1){
        let token = await createToken(data[0]['email']);
        return {status:'success' , token:token , data:data[0]};
      }
      else{
       return  {status:'fail', data:"no user found!"};
      }
    }
    catch(e){
        return {status:'fail' , data:e};
    }
}

module.exports = loginUserService ;