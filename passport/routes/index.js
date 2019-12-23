/*newUser.password=newUser.encryptPassword(password);
newUser.password=newUser.encryptPassword(password);
newUser.save(function(err,result){
if(err){
return done(err);
return done(null,newUser);
};*/
//
var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();
var passport=require('passport');
var csrf=require('csrf');
var csrfProtection=csrf();
/*router.use(function(req,res,next){
//mongoose.connect('mongodb://localhost/kersha-eske-gebeta');
})*/

router.get('/',function(req,res,next){
   
    /*Product.find({},function(err,docs){
        
        if(err){
            res.json({err: err}).end();
        }
    var productChunks=[];
    var chunkSize=3;
    for(var i=0;i<docs.length;i+=chunkSize){
       //productChunks.push(docs.slice(i,i+chunkSize));

    }*/
   res.render( 'AddToCart/Add');//, {title:'Add To Cart',products:productChunks});
   
});

   // })});
router.get('/Home/login',function (req,res,next){

    var message=req.flash('error');
    res.render('Home/login',{csrfToken:req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});
router.post('user/login',passport.authenticate('local.login',{
successRedirect:'/Home/login',
failureRedirect:'/login/Home',
failureFlash:true}));
router.get('/Home/login',function(req,res,next){
    var messages=req.flash('error');
    res.renser('Home/login',{csrfToken:req.csrfToken(),message:messages,hasErrors
    });
});
router.post('user/login',passport.authenticate('local.login',{
        successRedirect:'/user/login',
        failureRedirect:'/user/Home',
        failureFlash:true}));

module.exports=router;
