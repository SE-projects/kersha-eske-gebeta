const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const MenuOftheDay = new Schema({
    Description:{
        type : String, 
        required : true
    }, 
    BrancName :{
        type : String , 
        required : true ,
        
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
    },
    CookerID : {
        type : String, 
        required : true 
    }
    
});

mongoose.model('MenuOftheDay' , MenuOftheDay); 
