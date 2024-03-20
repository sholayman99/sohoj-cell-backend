const listUserAdService = async(req, dataModel)=>{
    try{
      let email = req.headers['email'];  
      let data = await dataModel.aggregate([
        {$match:{userEmail:email}}
      ]);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = listUserAdService;