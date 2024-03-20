const removeAdService = async(req, dataModel)=>{
    try{
      let email = req.headers['email'];
      let id = req.params['id'];
      let data = await dataModel.deleteOne({_id:id,userEmail:email});
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = removeAdService;