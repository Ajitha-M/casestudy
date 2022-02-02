const express=require('express')
const router=express.Router()
const Outpass=require('../Controllers/outpass/outpass')


router.post('/entry',Outpass.register)
router.get('/getEntry',Outpass.getUser)
router.route('/getOneentry/:id').post(Outpass.getOneUser)

module.exports=router