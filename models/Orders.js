
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Orders = new Schema({
    BranchName:{
        type : String, 
        required : true
    }, 
   
    DishName : {
        type : String, 
        required : true
        
    },
    Quantity : {
        type : Number,
        required : true
    },
    OrderType : {
        type : String,
        required : true
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

mongoose.model('Orders' , Orders); 
