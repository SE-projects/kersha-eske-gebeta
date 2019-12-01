const express = require('express'); 
var exphbs = require('express-handlebars');
const app = express(); 


app.use(express.static('public'));

app.engine('handlebars' , exphbs({
    defaultLayout: 'main'
}));
app.set('view engine' , 'handlebars');


app.get('/', (req,res)=>{
    res.render('Home')
});

const port = 3000;
app.listen(port,()=>{
    console.log(`listening to port ${port}...`); 
});
