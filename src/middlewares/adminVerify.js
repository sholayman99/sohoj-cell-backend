const bcrypt = require("bcrypt");

module.exports =(req,res,next)=>{
    let role = req.headers['role'];


    bcrypt.compare("adminRole",role,(err,result)=>{
        if(err){
          console.log(err);
          res.status(403).json({status:"unauthorized",message:"You don't have the authority"})
        }
        else{
            next();
        }
    })

}