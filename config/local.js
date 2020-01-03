
const LocalStrategy = require('passport-local').Strategy;

const mongoose= require('mongoose');
const bcrypt =require('bcryptjs');

//Load user model 
const User=mongoose.model('user');
module.exports = function(passport){
   
   passport.use(new LocalStrategy({usernameField: 'email'},
   (email, password, done)=> {
     
      //Match Users
       User.findOne({
         email :email
       }).then(user=> {
         if(!user){
          return done(null,false,{message: 'no user found' });
        }
  //  Match password using the hasing concept

 bcrypt.compare(password,user.password,(err,isMatch)=>{
   if(err) throw err;
   if(isMatch){
    AccountType=user.userType;
    
    LogedUser=email;  //seeting the global varible after login 
     return done(null,user); 
   }else{
    return done(null,false,{message: 'password incorrct' }); 
  }
 })


       })
 
   }));

 passport.serializeUser(function(user, done) {
  done(null, user.id);

});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
    
  });
});
}
 