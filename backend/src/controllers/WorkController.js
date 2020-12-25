const Work = require('../models/work')

module.exports={
    async index(req,res){
        const works =  await Work.findAll()

        res.json(works)
    },
    async show(req,res){
        const {id} = req.params
        if(isNaN(id)){
            res.senStatus(400)
        }else{
            let id = parseInt(req.params.id)
            const work = await Work.findOne({where:{id}})
            if(work == 0){
                res.sendStatus(404)
            }else{
                res.status(200).json({work})
            }

        }
            
            
        },
    async destroy(req,res){
        const {id} = req.params

        if(isNaN(id)){
            res.senStatus(400)
        }else{
            let id = parseInt(id)
            
            const workDeleted = await Work.destroy({ where:{ id } })

            if(workDeleted === 0 ){
                res.sendStatus(404)
            }else{
                res.status(200).json(workDeleted)
            }
        }
    },
    async update(req,res){

        let {id} = req.params
        const {title,describe} = req.body
        
        if(isNaN(id) || title == '' || describe == ''){
            res.sendStatus(400)
        }else{
            id = parseInt(id)
            const workUpdated = await Work.update({
                title,
                describe,
            },{
                where:{ id } 
            })
            if(workUpdated == 0 ){
                res.sendStatus(404)
            }else{

                res.sendStatus(200)
            }
        }
    },
    async create(req,res){
        const {title,describe,image} = req.body
        console.log(req.loggedUser)
        const userId = req.loggedUser.id
        try {
            const work = await Work.create({
                title,
                describe,
                image,
                userId
            })
            res.status(200).json(work)
        } catch (error) {
            res.status(400).json({error})
        }
    }
}