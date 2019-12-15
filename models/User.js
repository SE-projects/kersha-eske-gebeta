const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const User = new Schema({
    fullName:{
        type : String, 
        required : true
    }, 
    email :{
        type : String , 
        required : true ,
        unique: true
    },
    password : {
        type : String, 
        required : true
        
    },
    phoneNumber : {
        type : String,
        required : true
    },
    location : {
        type : String, 
        required : true 
    }
    
});

mongoose.model('user' , User); 
