
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


//create Schema
const Comment = new Schema({
    Comment:{
        type : String, 
        required : true
    }, 
   
    CommentType : {
        type : String,
        required : false,
        default:null
    },
  
    UserID : {
        type : String, 
        required : true 
    }
    
    
});

mongoose.model('Comment' , Comment); 
