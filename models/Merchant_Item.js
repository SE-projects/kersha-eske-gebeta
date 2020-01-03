
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Item = new Schema({
    IteamName:{
        type : String, 
        required : true
    }, 
   
    
    Quantity : {
        type : Number,
        required : true
    },
    BookerID : {
        type : String,
        required : true,
        default:null
    },
    UnitPrice : {
        type : Number, 
        required : true 
    },
    UserID : {
        type : String, 
        required : true 
    }
    
    
});

mongoose.model('Item' , Item); 
