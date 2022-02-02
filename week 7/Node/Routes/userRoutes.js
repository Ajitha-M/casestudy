const express=require('express')
const router=express.Router()
const User = require('../Controllers/UserController/userController')
const Outpass=require('../Controllers/outpass/outpass')
const passport = require('passport')

router.post('/register',User.register)
router.get('/getUser',User.getUser)
router.route('/user/:id').get(User.getOneUser)
router.post('/login',User.login)
router.route('/updateUser').put(User.updateUser)
router.get('/protected',passport.authenticate('jwt',{session:false}),User.protected)


module.exports=router