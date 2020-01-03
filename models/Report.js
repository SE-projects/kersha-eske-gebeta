
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Report = new Schema({
    DishName:{
        type : String, 
        required : true
    }, 
   
    
    NumberSold : {
        type : Number,
        required : true
    },
     
    UnitPrice : {
        type : Number,
        required : true
    },
     
    TotalPrice : {
        type : Number,
        required : true
    },
   
    UserID : {
        type : String, 
        required : true 
    }
    
    
});

mongoose.model('Report' , Report); 
