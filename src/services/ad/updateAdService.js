const updateAdService = async(req, dataModel)=>{
    try{
      let id = req.params['id'];
      let email = req.headers['email'];
      let reqBody = req.body;
      console.log(reqBody)
      let data = await dataModel.updateOne({_id:id,userEmail:email},reqBody);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = updateAdService;