const listItemService =async(req,dataModel)=>{
    try{
        let data = await dataModel.aggregate([{$match:{}}]);
        return {status:'success', data:data};
    }
    catch(e){
        return {status:'fail',data:e};  
    }
}

module.exports = listItemService;