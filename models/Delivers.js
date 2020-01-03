
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Deliver = new Schema({
    BranchName:{
        type : String, 
        required : true
    }, 
   
    OrderID : {
        type : String, 
        required : true
        
    },
   
    UserID : {
        type : String, 
        required : true 
    }
    
    
});

mongoose.model('Deliver' , Deliver); 
