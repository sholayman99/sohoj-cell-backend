const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    let token = req.headers['token'];

    if(!token){
        token = req.cookies['token'];
    }
    
    jwt.verify(token,'secret123abc',(err,decoded)=>{
        if(err){
            console.log(token);
            res.status(401).json({status:'unauthorized'});
        }
        else{
            req.headers.email = decoded.data;
            next();
        }
    })

}