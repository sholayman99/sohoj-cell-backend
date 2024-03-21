const createToken = require("../../utility/tokenUtility");
const hashText = require("../../utility/hashText");

const loginUserService = async(req,dataModel)=>{
    try{
      let reqBody = req.body;
      let data = await dataModel.aggregate([
        {$match:reqBody},{$project:{_id:0,fName:1,lName:1,email:1,password:1,role:1}}
      ]);
      if(data.length === 1){
        let token = await createToken(data[0]['email']);
        let hash = await hashText(data[0]['role']);
        return {status:'success' , token:token , role:hash};
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