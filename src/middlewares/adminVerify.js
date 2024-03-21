const bcrypt = require("bcrypt");

module.exports =(req,res,next)=>{
    let role = req.headers['role'];

    bcrypt.compare("admin",role,(err,result)=>{
        if(err){
          console.log(err);
          res.status(403).status("unauthorized!")
        }
        else{
            next();
        }
    })

}