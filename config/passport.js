const Googlestrategy = require('passport-google-oauth20').Strategy; 
const mongoose = require('mongoose');
const key = require('./key');
//load userModel
const Customer = mongoose.model('customers');

module.exports = function(passport){
    passport.use(
        new Googlestrategy({
            clientID : key.googleClientID ,
            clientSecret : key.googleClientSecret,
            callbackURL: '/auth/google/callback'
            //proxy : true
        },(accessToken , refreshToken,profile,done) =>{
            Customer.findOne({
                googleID : profile.id
            }).then(customer =>{
                done(null , customer); 
            })             
        })
    );
    passport.serializeUser((customer,done)=>{
        done(null, customer.id); 
    });
    passport.deserializeUser((id,done)=>{
        Customer.findById(id).then(customer =>done (null,customer))
    });
}