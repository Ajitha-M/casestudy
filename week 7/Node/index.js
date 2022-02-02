require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
var passport = require('passport')
const mongoose=require('mongoose')
const cors=require('cors') 
const dbConfig=require('./config/config')
const app=express()
const UserRoutes=require('./Routes/userRoutes')
const Outpass=require('./Routes/outpassRoutes')
const Admin=require("./Routes/adminRoutes")


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize());

require('./middleware/passport')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Connected to the database successfully')
}).catch((err)=>{
    console.log(err)
    process.exit()
})

//User Routes
app.use('/user',UserRoutes)
app.use('/outpass',Outpass)
app.use('/admin',Admin)







app.listen(5000,()=>{
    console.log('Server is running at port 5000')
})


