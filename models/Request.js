const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Request = new Schema({
    source:{
        type : String, 
        required : true
    }, 
    destination :{
        type : String , 
        required : true ,
       
    },
    Usertype : {
        type : String, 
        required : true
        
    },
    NumberOfcars : {
        type : Number,
        required : true
    },
  
    UserID:{
        type:String,
        required:true
    }
    
    
});

mongoose.model('Request' , Request); 
