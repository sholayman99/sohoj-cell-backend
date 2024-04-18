const listUserAdService = async(req, dataModel)=>{
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
        let email = req.headers['email'];
        let data = await dataModel.aggregate([
        {$match:{userEmail:email}},{$skip:skipRow},{$limit:perPage},
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
        let totalCount = await dataModel.aggregate([{$match:{userEmail:email}}]);
      return {status:'success',data:data ,total:totalCount.length};
    }
    catch(e){
        return {status:'fail',data:e};
    }
}

module.exports = listUserAdService;