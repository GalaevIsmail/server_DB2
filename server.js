const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000;

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/users").then(()=>{
    console.log("Успешно подключен к БД");
    
}).catch((error)=>{
    console.error('Произошла ощибка при подключении к БД' + error.message);
    process.exit(1)
    
})

app.post("/adduser", (req, res)=>{
    const {name , age} = req.body
    
    const user = {
        
    }
    
})


app.listen(PORT , ()=>{
    console.log("Сервер успешно запушен на порту:" + PORT);
    
})