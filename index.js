const express = require('express'); 
var exphbs = require('express-handlebars');
const app = express(); 
//constant variables 


const CSMfullName="central Manager";
const home="home";
const casherfullName="casherfullName";
const shopSMfullName="shopSMfullName";
const customerfullname="customerfullname";
const logisticfullname="logisticfullname";

//sample data it ..later we will change this to the data fetched from database

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

//end of sample data..

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
  
    res.render('HomePages/Menu', {
        totalmenus_Burger:totalmenus_Burger, 
        totalmenus_Pizza : totalmenus_Pizza, 
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

//casher main page -route 
app.get('/casher_customerOrder',(req,res)=>{
     res.render('casher/casher',{
        casherfullName:casherfullName,
        totalmenus_Burger:totalmenus_Burger, 
        totalmenus_Pizza : totalmenus_Pizza, 
        totalmenus_Drink : totalmenus_Drink
     })
  });
  //casher-neworder route 
  app.get('/Casher_NewOrder',(req,res)=>{
    res.render('casher/newOrder',{
        casherfullName:casherfullName
    })
 });
 //casher -report route 
 app.get('/Casher_Report',(req,res)=>{
    res.render('casher/Report',{
        casherfullName:casherfullName
    })
 });



//logistic 
//SSM
//customer 




//sample data ....

app.get('/viewOrdersOfDeliveryAgent',(req,res)=>{
    let ordersfrom=[{
      
        DestinationPlace:'Bole',
        NumberOfCars:5,
        ArrivalTime:'10:54 AM',
        DestinationTime:'11:05 AM'
    },
    {
        DestinationPlace:'4-kil0',
        NumberOfCars:5,
        ArrivalTime:'1:54 AM',
        DestinationTime:'1:05 AM'
  
      }
]
  res.render('Logistic/viewOrdersOfDeliveryAgent',{
        ordersfrom:ordersfrom,
        logisticfullname:logisticfullname

  }
      );
});

//logistic ---orders from CSM route 

app.get('/viewOrderofCSM',(req,res)=>{
    res.render('Logistic/viewOrderofCSM',{
        logisticfullname:logisticfullname
       
    });
  });
   //logistic  --orders from purcheser route 
 app.get('/viewOrdersOfpurcheser',(req,res)=>{
    res.render('Logistic/viewOrdersOfpurcheser',{
        logisticfullname:logisticfullname
    })
 });
 
 

 // customer 

 app.get('/customer/vieworder',(req,res)=>{
    res.render('customer/viewOrders',{
        customerfullname:customerfullname,
        totalmenus_Burger:totalmenus_Burger, 
        totalmenus_Pizza : totalmenus_Pizza, 
        totalmenus_Drink : totalmenus_Drink
    })
 });


 app.get('/customer/comment',(req,res)=>{
    res.render('customer/comment',{
        customerfullname:customerfullname
    })
 });
 



//SSM--order route
app.get('/orders',(req,res)=>{
    let orders=[{
      SortOrder:1,
      DishName:"corn_soup",
      takeAway:"yes",
      Done:"yes"

    },
    {
      SortOrder:2,
      DishName:"Burger",
      takeAway:"yes",
      Done:"yes"

  
      },
      {
        SortOrder:3,
        DishName:"pizza",
        takeAway:"yes",
        Done:"yes"
  
    
        }
  ]

  res.render('shopSM/orders',{
        orders:orders,
        shopSMfullName:shopSMfullName

  }
      );
});

 
//shopSM--reportfromcashier route 

app.get('/reportsfromcashier',(req,res)=>{
    res.render('shopSM/reportsfromcashier',{
        shopSMfullName:shopSMfullName
       
    });
  });
   //shopSM -order route 
 app.get('/shopSM/orders',(req,res)=>{
    res.render('shopSM/orders',{
        shopSMfullName:shopSMfullName
    })
 });


 //sample data .... later changed when we finish our databse 

 let rowMaterial =[{
    materialName:'Carrot', 
    imageSource : '/img/row material/carrot.jpg', 
    amaount: '50 kilo',
    
    
}, {
    materialName:'Onion', 
    imageSource : "/img/row material/onion.jpg", 
    amaount: '70 kilo',
    
}
];


app.get('/shopSM/sendorders',(req,res)=>{
    //res.render('shopSM/sendorders',{
      //  shopSMfullName:shopSMfullName
//
   // });
  //});
  
    res.render('shopSM/sendorders', {
        rowMaterial:rowMaterial
        
    })
});

 

//shopSM--SendOrders route 
app.get('/sendorders',(req,res)=>{
    res.render('shopSM/sendorders',{
        shopSMfullName:shopSMfullName

    });
  });
  //shopSM--register route 
app.get('/registeration',(req,res)=>{
    res.render('shopSM/registeration',{
        shopSMfullName:shopSMfullName

    });
  });

const port = 3000;
app.listen(port,()=>{
    console.log(`listening to port ${port}...`); 
});
