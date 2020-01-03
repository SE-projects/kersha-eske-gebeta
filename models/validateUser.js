const Joi = require('joi'); 
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

//validating function
function validateUser(User){
    const Schema = {
        fullName : Joi.string()
        .alphanum()
        .min(4)
        .max(50)
        .required(), 

        password : Joi.string()
        //.pattern(new RegExp('^[a-zA-Z0-9]$'))
        .required(), 

        email : Joi.string()
        .email()
        .required() , 
        
        location : Joi.string()
        .required()
        .min(4)
        .max(50),

        phoneNumber : Joi.string()
        .required()
        
        //phoneNumber : Joi.string()
        //.required()
        //.phoneNumber()
    }
    return Joi.validate(User , Schema ); 
}
exports.validate = validateUser;