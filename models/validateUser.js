const Joi = require('joi'); 
function validate(CreateAccountSchema){
    const Schema = {
        fullName : Joi.string().required(),
        phoneNumber : Joi.string().required(), 
        location : Joi.string().required(),
        email : Joi.string().required().email(), 
        password : Joi.string().required()
    }; 
    return Joi.validate(CreateAccountSchema , Schema); 
}
module.exports = validate;