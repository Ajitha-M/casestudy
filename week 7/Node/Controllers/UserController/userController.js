const User = require('../../Models/User')
const hash=require('./bcrypt')
const jwt=require('./jwtToken')

exports.register= async(req,res)=>{

    const hashedPassword= await hash.hashPassword(req.body.password)
    User.create({ name:req.body.name, 
        email:req.body.email, 
        contact:req.body.contact,
        regNo:req.body.regNo,
        dept:req.body.dept,
        roomNo:req.body.roomNo,
        password:hashedPassword})
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })

}


exports.getUser=(req,res)=>{
    User.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}
exports.getOneUser=(req,res)=>{
    User.findById({_id:req.params.id})
    .then((data)=>{
      res.send(data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  //update profile
  exports.updateUser = (req, res) => {
    User
      .findOneAndUpdate(
        { _id: req.body.id },
       { $set:{
        name:req.body.name, 
        email:req.body.email, 
        contact:req.body.contact,
        regNo:req.body.regNo,
        dept:req.body.dept,
        roomNo:req.body.roomNo,
        }}
      )
      .then((data) => {
        res.json({message:"updated",value:data});
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Student.",
        });
      });
  };


exports.login=async(req,res)=>{
    try{
        await User.findOne({email:req.body.email})
        .then(async (user)=>{
            if(user){
                const checkPassword=await hash.verifyPassword(req.body.password,user.password)
                if(checkPassword){
                    const payload={
                    
                        email:user.email
                    }
                    const token= await jwt.generateToken(payload)
                    res.send({
                        success:true,
                        token:"Bearer "+token
                    })
                }else{
                    res.send('Incorrect Password ! .Try again')
                }
            }else{
                res.send('email not found')
            }
        })
    }catch(error){
        console.log(error)
    }
}

exports.protected=(req,res)=>{
    res.send('You are in protected route')
}