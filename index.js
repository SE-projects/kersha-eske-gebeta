const express = require('express'); 
var exphbs = require('express-handlebars');
const app = express(); 
//constant variables 

const CSMfullName="central Manager";
const home="home";

//constant variables

//Middle Wares
app.use(express.static('public'));

app.engine('handlebars' , exphbs({
    defaultLayout: 'main'
}));
app.set('view engine' , 'handlebars');


app.get('/Menu', (req,res)=>{
    // TotalMenu.find({})
    // .then(totalmenus=>{
    //     res.render('HomePages/Menu', {
    //         totalmenus:totalmenus
    //     });
    // });
    let totalmenus_Burger =[{
        dishName:"Cheezy Crunch Burger", 
        imageSource : "./img/TotalMenus/CheezyCrunchBurger.jpg", 
        unitPrice: "120 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
        
    }, {
        dishName:"Thick-Blend Burger", 
        imageSource : "./img/TotalMenus/Thick-Blend Burger.png", 
        unitPrice: "100 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
         
    }];
    let totalmenus_Pizza =[{
        dishName:"Cheezy Crunch Burger", 
        imageSource : "./img/TotalMenus/ChezzyCrunchBurger.png", 
        unitPrice: "120 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
        
    }, {
        dishName:"Thick-Blend Burger", 
        imageSource : "./img/TotalMenus/Thick-Blend Burger.png", 
        unitPrice: "100 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
         
    }];
    let totalmenus_Drink =[{
        dishName:"Cheezy Crunch Burger", 
        imageSource : "./img/TotalMenus/ChezzyCrunchBurger.png", 
        unitPrice: "120 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
        
    }, {
        dishName:"Thick-Blend Burger", 
        imageSource : "./img/TotalMenus/Thick-Blend Burger.png", 
        unitPrice: "100 Birr",
        discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."
         
    }];
    res.render('HomePages/Menu', {
        totalmenus_Burger:totalmenus_Burger, 
        totalmenus_Pizza : totalmenus_Burger, 
        totalmenus_Drink : totalmenus_Drink,
        HomePage:home
    })
}); 
app.get('/', (req,res)=>{
    res.render('HomePages/Home',{
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
