const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const User = new Schema({
    fullName:{
        type : String, 
        required : true, 
        minlength : 4,
        maxlength : 50
    }, 
    email :{
        type : String ,
        minlength: 3,
        maxlength: 50, 
        required : true ,
        unique: true
       
    },
    password : {
        type : String, 
        required : true,
        minlength: 6, 
        maxlength:1024,
    },
    phoneNumber : {
        type : String , 
        minlength:10, 
        maxlength : 10,
        required : true
    },
    location : {
        type : String,
        minlength : 4, 
        maxlength : 50, 
        required : true 
    }, 
    userType : {
        type : String, 
        required : true
       
    },
    branch :{
        type : String, 
        required : false,
        default:null
    }
    
});

mongoose.model('user' , User); 
