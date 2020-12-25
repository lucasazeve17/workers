const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../utils')


module.exports ={
    async index(req,res){
        const users = await User.findAll()
        console.log('usuarios: ', users)
        res.json(users)
    },
    async create(req,res){ 
        const {name,email,password,phoneNumber} = req.body
        try {
            const user = await User.create({
                name,
                email,
                password,
                phoneNumber
            })
        
            return res.json(user)
        } catch (error) {
            console.log(error)
            res.status(400).json({error:error})
        }
    },
    async update(req,res){
        let {id} = req.params
        const {name,avatar,about,phoneNumber} = req.body
        
        if(isNaN(id) || name == '' || about == ''|| phoneNumber == ''){
            res.sendStatus(400)
        }else{
            id = parseInt(id)
            const userUpdate= await User.update({
                name,
                avatar,
                about,
                phoneNumber
            },{where:{id}})

            if(userUpdate == 0){
                res.sendStatus(404)
            }else{
                res.sendStatus(200)
            }
        }
    },
    async auth(req,res){
        const {email,password} = req.body
        
        if(email != undefined){
            const user = await User.findOne({where:{email}})
            
            if(user == undefined){
                res.status(401).json({err:'E-mail não existe na base de dados'})
            }else{
                if(user.password === password){
                    jwt.sign({id:user.id,email:user.email},jwtSecret,{expiresIn:'48h'},(err,token)=>{
                        if(err){
                            res.status(400).json({erro:'falha interna'})
                        }else{
                            res.status(200).json({token})
                        }
                    })
                }else{
                    res.status(401).json({err:'Credenciais inválidas'})
                }
            }
        }else{
            res.status(400).json({err:'E-mail inválido'})
        }
    },
    async destroy(req,res){
        const {id} = req.params

        User.destroy({where:{id}}).then(()=> res.json("removeu"))
    }
}