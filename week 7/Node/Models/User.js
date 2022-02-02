const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    regNo: { type: String, required: true },
    dept: { type: String, required: true },
    roomNo:{type: String, required: true },
    password:{
        type:String,
        required:true
    }
})

module.exports =mongoose.model('users',userSchema)