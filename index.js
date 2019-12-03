const express = require('express'); 
var exphbs = require('express-handlebars');
const app = express(); 

//constant variables
const home = 'home';

//Middle Wares
app.use(express.static('public'));

app.engine('handlebars' , exphbs({
    defaultLayout: 'main'
}));
app.set('view engine' , 'handlebars');

//
app.get('/', (req,res)=>{ 
    res.render('HomePages/Home',{
        HomePage:home
    })
});
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
        HomePage:"Homepage called"
    })
});

const port = 3000;
app.listen(port,()=>{
    console.log(`listening to port ${port}...`); 
});
