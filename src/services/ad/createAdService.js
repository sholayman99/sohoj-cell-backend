const createAdService = async(req, dataModel) =>{
    try{
      let email = req.headers['email'];
      let reqBody = req.body;
      reqBody.userEmail = email;
      let data = await dataModel.create(reqBody);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = createAdService;