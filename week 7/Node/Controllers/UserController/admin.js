const Admin = require('../../Models/Admin')
const hash=require('./bcrypt')
const jwt=require('./jwtToken')

exports.register= async(req,res)=>{

    const hashedPassword= await hash.hashPassword(req.body.password)
    Admin.create({ name:req.body.name, 
        email:req.body.email, 
        contact:req.body.contact,
       
        password:hashedPassword})
    .then((data)=>{
        res.send(data)
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })

}


exports.getUser=(req,res)=>{
    Admin.find({})
    .then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error)
    })
}
exports.getOneUser=(req,res)=>{
    Admin.findById({_id:req.params.id})
    .then((data)=>{
      res.send(data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  //update profile
  exports.updateUser = (req, res) => {
    Admin
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
        await Admin.findOne({contact:req.body.contact})
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

