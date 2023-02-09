const jwt = require("jsonwebtoken")
const tokenSecret = require("../../config/JWTToken")

function AdminAuth (req, res, next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        const token = bearer[1]
        
        try{
            const verifyToken = jwt.verify(token, tokenSecret.token)

            if(verifyToken){
                next()
            }else{
                res.send("erro")
            }
            
        }catch(err){
            return res.send("erroo")
        }    
    }else{
        return res.send("errooo")
    }
}

module.exports = AdminAuth