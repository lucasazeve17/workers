const express = require('express')
const connection = require('./database')
const routes = require('./routes')
const cors = require('cors')
const server = express()

//iniciando Databse
connection
.authenticate()
.then(()=>{
    console.log('Conexão estabelecida com sucesso');
}).catch((err)=>{
    console.log(err)
})

server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(cors())

server.use(routes)


server.listen(3030,()=>console.log('Server started'))