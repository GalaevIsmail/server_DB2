const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const Admin = require('./models/Admin')

const PORT = 3000;

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/users").then(()=>{
    console.log("Успешно подключен к БД");
    
}).catch((error)=>{
    console.error('Произошла ощибка при подключении к БД' + error.message);
    process.exit(1)
    
})

app.post("/adduser" ,async (req, res)=>{
    const {name , age} = req.body
    
    const newUser = new User({name , age })
    await newUser.save();


})

app.post("/Admin" , async  (req ,res) =>{
    const {login , password , age ,email} = req.body

    const newAdmin = new Admin({login , password , age ,email})
    await newAdmin.save();
    console.log(req.body);
    
})


app.listen(PORT , ()=>{
    console.log("Сервер успешно запушен на порту:" + PORT);
    
})