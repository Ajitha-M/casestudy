const express=require('express')
const router=express.Router()
const Admin = require('../Controllers/UserController/admin')

const passport = require('passport')

router.post('/register',Admin.register)
router.get('/getUser',Admin.getUser)
router.route('/user/:id').get(Admin.getOneUser)
router.post('/login',Admin.login)
router.route('/updateUser').put(Admin.updateUser)



module.exports=router