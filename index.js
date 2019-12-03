const express = require('express'); 
var exphbs = require('express-handlebars');
const app = express(); 
//constant variables 

const CSMfullName="central Manager";
const home="home";


app.use(express.static('public'));

app.engine('handlebars' , exphbs({
    defaultLayout: 'main'
}));
app.set('view engine' , 'handlebars');


app.get('/', (req,res)=>{
    res.render('Home',{
        HomePage:home
    })
});

//the centeral storage manager route
 app.get('/csm',(req,res)=>{
    res.render('centra-sm',{
        CSMfullName:CSMfullName
    });
  });

//CSM--checkReport route
app.get('/checkReport',(req,res)=>{
    let report=[{
      MenuItem:"sofi",
      NumberSold:6,
      unitprice:7,
      Totalprice:45

    },
    {
        MenuItem:"kali",
        NumberSold:6,
        unitprice:7,
        Totalprice:45
  
      }
]
  res.render('CentralSM/checkReport',{
        report:report,
        CSMfullName:CSMfullName

  }
      );
});
//CSM--order route 
app.get('/order',(req,res)=>{
    res.render('CentralSM/order',{
        CSMfullName:CSMfullName
    });
  });
//CSM--registor route 
app.get('/registor',(req,res)=>{
    res.render('CentralSM/registor',{
        CSMfullName:CSMfullName
    });
  });
    
  

const port = 3000;
app.listen(port,()=>{
    console.log(`listening to port ${port}...`); 
});
