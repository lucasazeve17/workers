const Work = require('../models/work')

module.exports={
    async index(req,res){
        const { page = 1 } = req.query
        
        console.log(page)

        const {count, rows } =  await Work.findAndCountAll({
            limit:5,
            offset:(page-1)*5
            }
        )
        res.header('X-Total-Count',count)

        res.json(rows)
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
             id = parseInt(id)
            
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
        const {title,describe,image} = req.body
        
        if(isNaN(id) || title == '' || describe == '' || image == ''){
            res.sendStatus(400)
        }else{
            id = parseInt(id)
            const workUpdated = await Work.update({
                title,
                describe,
                image
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
        const {title,describe,image,price} = req.body
        const userId = req.loggedUser.id
        try {
            const work = await Work.create({
                title,
                describe,
                image,
                price,
                userId,
            })
            res.status(200).json(work)
        } catch (error) {
            res.status(400).json({error})
            console.log(error);
        }
    }
}