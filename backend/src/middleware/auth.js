const jwt = require('jsonwebtoken')
const jwtSecret = require('../utils')

const auth = (req,res,next)=>{
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        let token = bearer[1]
        console.log(token)

        jwt.verify(token,jwtSecret,(err,data)=>{
            if(err){
                res.status(401).json({erro:'Token inválido'})
            }else{
                req.token = token
                req.loggedUser = {id:data.id,email:data.email}
                console.log(data)
                next()
            }
        })
    }else{
        res.status(401).json({erro:'Token inválido'})
    }
}

module.exports = auth