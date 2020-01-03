
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const TotalMenu = new Schema({
    Description:{
        type : String, 
        required : true
    }, 
   
    DishName : {
        type : String, 
        required : true
        
    },
    ImageSource : {
        type : String,
        required : true
    },
    UnitPrice : {
        type : Number,
        required : true 
    }
    
    
});

mongoose.model('TotalMenu' , TotalMenu); 
