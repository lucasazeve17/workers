const Sequelize = require('sequelize')
const connection = require('../database/index')
const User = require('./User')

const Work = connection.define('work',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    describe:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

const syncro = async ()=> await Work.sync({force:false})

User.hasMany(Work)
Work.belongsTo(User)

syncro()

module.exports = Work