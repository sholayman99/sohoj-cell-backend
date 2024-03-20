const updateAdService = async(req, dataModel)=>{
    try{
      let id = req.params['id'];
      let email = req.headers['email'];
      console.log(id,email)
      let data = await dataModel.updateOne({_id:id,userEmail:email},req.body);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = updateAdService;