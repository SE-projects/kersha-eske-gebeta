const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Joi = require('joi'); 

//create Schema
const CustomerSchema = new Schema({
    googleID:{
        type : String, 
        required : true
    }, 
    email :{
        type : String , 
        required : true 
    },
    fullName : {
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

mongoose.model('customers' , CustomerSchema); 
