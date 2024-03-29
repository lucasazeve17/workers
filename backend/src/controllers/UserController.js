const User = require('../models/User')
const Work = require('../models/Work')
const jwt = require('jsonwebtoken')
const jwtSecret = require('../utils')


module.exports ={
    async index(req,res){
        const users = await User.findAll()
        res.json(users)
    },
    async show(req,res){
        const {id} = req.params
        console.log('idd ',id);
        const user = await User.findOne({
            where:{ id },
            include:Work
        })
        
        res.json(user)
    },
    async create(req,res){ 
        const {name,email,password,phoneNumber} = req.body
        try {
            if(email){
                const userfind = await User.findOne({where:{email}})
                if(userfind) res.status(401).json({err:'E-mail já cadastrado na base de dados'})
                
                const user = await User.create({
                    name,
                    email,
                    password,
                    phoneNumber
                })
                
                return res.json(user)
            }else{
                res.status(400).json({err:'E-mail inválido'})
            }
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
        
        if(email){
            const user = await User.findOne({where:{email}})
            
            if(!user){
                res.status(401).json({err:'E-mail não existe na base de dados'})
            }else{
                if(user.password === password){
                    jwt.sign({id:user.id,email:user.email},jwtSecret,{expiresIn:'48h'},(err,token)=>{
                        if(err){
                            res.status(400).json({erro:'falha interna'})
                        }else{
                            res.status(200).json({token,id:user.id})
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