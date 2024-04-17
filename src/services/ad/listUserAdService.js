const listUserAdService = async(req, dataModel)=>{
    try{
      let email = req.headers['email'];  
      let data = await dataModel.aggregate([
        {$match:{userEmail:email}},
          {$project:{
             _id:1,productName:1,status:1,image:1,
                  "createdDate":{
                      $dateToString:{
                          date:"$createdAt",
                          format:"%d-%m-%Y"
                      }
                  },

              }}
      ]);
      return {status:'success',data:data};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = listUserAdService;