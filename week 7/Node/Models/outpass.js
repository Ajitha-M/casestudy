const mongoose = require('mongoose')

const outpassSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    relationShip: { type: String, required: true },
    place: { type: String, required: true },
date:{type: String, required:true }

})

module.exports =mongoose.model('outpass',outpassSchema)