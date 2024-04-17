const profileUpdateService = async(req, dataModel)=>{
    try {
        let reqBody = req.body;
        let email = req.headers['email'];
        let data = await dataModel.updateOne(
            {email:email} , {$set:reqBody},{upsert:true}
        );
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

module.exports = profileUpdateService;