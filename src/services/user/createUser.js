const createUser =async(req,dataModel)=>{
    try{
      let reqBody = req.body;
      let data = await dataModel.create(reqBody);
      return {status:'success' , data:data};
    }
    catch(e){
        return {status:'fail' , data:e};
    }
}

module.exports = createUser;