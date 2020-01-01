
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Manages = new Schema({
  
    ManagerID : {
        type : String, 
        required : true 
    },
    ManagedID : {
        type : String, 
        required : true 
    }
    
    
    
});

mongoose.model('Manages' , Manages); 
