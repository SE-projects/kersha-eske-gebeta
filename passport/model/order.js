
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Schema=new Schema({

  
    user:{type:Schema.Type.ObjectId,ref:'User'},
    cart:{type:Object,require:true},
    address:{type:String,required:true},
    name:{type:String,require:true},
    paymentId:{type:string,required:true}
    });
    module.exports=mongoose.model('Order',schema);
    
