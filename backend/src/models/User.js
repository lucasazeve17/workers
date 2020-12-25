const Sequelize = require('sequelize')
const connection = require('../database/index')

const User = connection.define('users',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    avatar:{
        type:Sequelize.STRING,
        allowNull:true
    },
    about:{
        type:Sequelize.STRING,
        allowNull:true
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

const syncro = async ()=> await User.sync({force:false})

syncro()

module.exports = User