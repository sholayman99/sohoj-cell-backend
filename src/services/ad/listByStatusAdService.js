const listByStatusAdService = async (req, dataModel)=>{
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let skipRow = (pageNo-1)*perPage;
       let status = req.params['status'];
       let matchStage ={};
       let sortStage ={};
       if(status !== "all"){
           matchStage = {status:status};
           sortStage = {createdAt:1}
       }
       else{
           matchStage = {}
           sortStage ={status:1}
       }
       let data = await dataModel.aggregate([
           {$match:matchStage},{$sort:sortStage},{$skip:skipRow},{$limit:perPage},
           {$project:{negotiable:0,categoryID:0,districtID:0,divisionID:0,authenticity:0,features:0,
                   description:0,edition:0
               }}
       ]);
       let totalCount= await dataModel.aggregate([{$match:matchStage}]);
       return {status:"success",data:data , total:totalCount.length};
    }
    catch (e) {
        return {status:"fail",data:e};
    }
}

module.exports = listByStatusAdService;