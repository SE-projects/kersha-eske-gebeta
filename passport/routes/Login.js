var express = require('express');
var app = express.Router()
app.get('/', (req,res)=>{
    res.render('HomePages/login')
});
/*
app.post('/',(req,res)=>{
    var passport=require('passport');
var User=require('../model/User');
//var LocalStrategy=require('passport_local').Strategy;
passport.serializeUser(function(user,done){
done(nll,user.id);
});
passport.deserializeUser(function(user,done){
User.findById(id,function(err,user){
done(err,user);
});
});
/*passport.use('local.login',new LocalStrategy({
usernameField:'email',
passwordField:'password',
passReqToCallback:true},
function(req,email,password,done){
    req.checkBody('email','Invalid email').notEmpty().isEmail();
req.checkBody('password','Invalid password').notEmpty().isLength({min:4});
var errors=req.validationErrors();
if(errors){
var messages=[];
errors.forEach(function(error){
message.push(error.msg);
});
return done(null,false,req.flash('error',messages));
}


User.findOne({'email':email},function(err,user){
if(err){
return done(err);
}
if(user){
return done(null,false,{message:'email is already in use.'});
}
var newUser=new User();
newUser.email=email;
newUser.password=newUser.encryptPassword(password);
newUser.password=newUser.encryptPassword(password);
newUser.save(function(err,result){
if(err){
return done(err);}
return done(null,newUser);
});
});
}));
passport.use('local.Login'({
    usernameField:'email',
    passwordField:'email',
    passReqToCallback:true
    },function(req,email,password,done){
        req.checkBody('email','Invalid email').notEmpty().isEmail();
        req.checkBody('password','Invalid password').notEmpty();
        var errors=req.validationErrors();
        if(errors){
        var messages=[];
        errors.forEach(function(error){
        message.push(error.msg);
        });
        return done(null,false,req.flash('error',messages));
        }
        User.findOne({'email':email},function(err,user){
            if(err){
            return done(err);
            }
            if(!user){
                return done(null,false,{message:'no user found.'});
            }
            if(!user.validPassword(password)){
                return done(null,false,{message:'wrong password.'});
            }
           return done(null,user);
            });
            }));
        
        
    
})*/

module.exports = app