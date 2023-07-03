const jwt = require("jsonwebtoken") 
 
 const verifyToken = (req, res, next) =>{
    
    const token = req.body['x-access-token'] || req.query.token || req.headers['x-access-token']
console.log(req.query.token)
    if(!token)res.json({isToken: false})
    else
    {
        jwt.verify(token, "seckey", (err, tok) => {
            if(err)res.json({isToken: false, message: "invalid token"})
            else{
                req.tok = tok
                // console.log(token)
                next()
            }
        })
    }
}

module.exports = verifyToken