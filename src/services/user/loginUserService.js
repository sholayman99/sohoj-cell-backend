const createToken = require("../../utility/tokenUtility");
const hashText = require("../../utility/hashText");

const loginUserService = async(req,dataModel)=>{
    try{
      let reqBody = req.body;
      let data = await dataModel.aggregate([
        {$match:reqBody},{$project:{_id:0,fullName:1,email:1,photo:1,role:1}}
      ]);
      if(data.length === 1){
        let token = await createToken(data[0]['email']);
        let hash;
        if(data[0]['role'] === "admin"){
             hash = await hashText("adminRole");
        }
        else{
            hash = await hashText("userRole")
        }
        return {status:'success' , token:token , role:hash , data:data[0]};
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