const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const Joi = require('joi'); 

//create Schema
const ShopSM = mongoose.model('ShopSM' , new mongoose.Schema({
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


function validateCSM(ShopSM){
    const Schema = {
        fullName : Joi.string().required(),
        phoneNumber : Joi.string().required(), 
        email : Joi.string().required().email(), 
        password : Joi.string().required()
    }; 
    return Joi.validate(ShopSM , Schema); 
}

exports.ShopSM = ShopSM ; 
exports.validate = validateCSM ; 