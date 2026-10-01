const mongoose = require("mongoose")

const adminShema = new mongoose.Schema({
    login:{
        type: String,
        require : true
    },
    password:{
        type: Number,
        require :true
    },
    age:{
        type: Number,
        require :true
    },
    email:{
        type: String , 
        require :true
    }
})
module.exports = mongoose.model("Admin", adminShema)