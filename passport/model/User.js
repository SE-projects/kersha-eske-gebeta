var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');
var userSchema=new Schema({
email:{type:String,require:true}
,Password:{type:String,require:true}
});
userSchema.methods.encryptPassword=function(password){
return bcrypt.compareSync(password,this.password);
};
module.exports=mongoose.model('User',userSchema);
