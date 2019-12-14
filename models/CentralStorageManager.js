const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Joi = require('joi'); 

//create Schema
const centralManager = mongoose.model('centralManager' , new mongoose.Schema({
    googleID:{
        type : String, 
        required : true 
    }, 
    email :{
        type : String , 
        required : true ,
        unique : true
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
    },
    password : {
        type : String, 
        required : true
    }
}));


function validateCSM(centralManager){
    const Schema = {
        fullName : Joi.string().required(),
        phoneNumber : Joi.string().required(), 
        email : Joi.string().required().email(), 
        password : Joi.string().required()
    }; 
    return Joi.validate(centralManager , Schema); 
}

exports.centralManager = centralManager ; 
exports.validate = validateCSM ; 