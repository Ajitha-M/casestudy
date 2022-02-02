const Outpass = require('../../Models/outpass')
const jwt=require('../UserController/jwtToken')

exports.register= async(req,res)=>{
    Outpass.create({
        _id:req.params.id,
        
        name:req.body.name,
        course:req.body.course,
        reason:req.body.reason,
        relationShip:req.body.relationShip,
        place:req.body.place,
        date:req.body.date

        })
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })

}
exports.getUser=(req,res)=>{
    Outpass.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}
exports.getOneUser=(req,res)=>{
    Outpass.findById({_id:req.params.id})
    .then((data)=>{
      res.send(data)
    }).catch((err)=>{
      console.log(err)
    })
  }