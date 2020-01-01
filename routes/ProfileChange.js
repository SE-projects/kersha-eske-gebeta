const mongoose = require('mongoose');
const express = require('express');
const router = express.Router(); 
const {centralManager , validate} = require('../models/User'); 

router.put('/:emailAddress', (req,res) =>{
    const {error} = validate(req.body); 
    if(error) {
        //error flash is send here
    }else{
        //success flash and update on MongooDB 
        let customer =  centralManager.findOne({email : emailAddress}); 

    }
}); 

module.exports = router ; 