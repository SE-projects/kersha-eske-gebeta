const express = require('express');
var exphbs = require('express-handlebars');
const app = express(); 
//constant variables 

var db = require("./passport/connectDb");

const passport = require('passport'); 
const mongoose = require('mongoose'); 
const flash=require('connect-flash');
const session = require('express-session'); 
const cookieParser = require ('cookie-parser'); 
const methodOverride = require('method-override'); 
const bodyParser = require('body-parser'); 
const bcrypt= require('bcryptjs');


//schema
require('./models/Customer');
const validate = require('./models/validateUser');


const profileChange = require('./routes/ProfileChange'); 
const register = require('./routes/register.js');


app.use(cookieParser());


// schema
require('./models/User');

//passport config 

require('./config/passport')(passport); 
const passwordChange = require('./routes/PasswardChange'); 
app.use(cookieParser());


//BodyParser Middle Ware
app.use(bodyParser.urlencoded({extended : false})); 
app.use(bodyParser.json()); 






const CSMfullName = "central Manager";
const home = "home";
const casherfullName = "casherfullName";

const purchaserfullName = "purchaserfullName";
const SSMfullName = "SSMfullName";
const MerchantName = "MerchantName";
 
//working area for validatoin



//Loding the schemas (tables of our program in database) ..use this for your works 
require('./models/User');
const user=mongoose.model('user');

require('./models/Comment');
const Comment=mongoose.model('Comment');


require('./models/Orders');
const Order=mongoose.model('Orders');

require('./models/Delivers');
const Deliver=mongoose.model('Deliver');

require('./models/Manages');
const Manager=mongoose.model('Manages');


require('./models/MenuOftheday');
const MenuOftheday=mongoose.model('MenuOftheDay');

require('./models/Merchant_Item');
const MerchantItem=mongoose.model('Item');

require('./models/Report');
const Report=mongoose.model('Report');

require('./models/Request');
const Request=mongoose.model('Request');

require('./models/TotalMenu');
const TotalMenu=mongoose.model('TotalMenu');

//end of our schem definatino


        


 //encruypting the sample password

// bcrypt.genSalt(10, (err, salt)=> {
//     bcrypt.hash(newUser.password, salt, (err, hash)=> {
//         newUser.password=hash;
       
//         newUser.save()
//         .then(user =>{
//             console.log('user saved :');
//         } )
//         .catch(err => {
//             console.log(err);
//             return;
//         });
          
//     });
// });

// passport config 
require('./config/local')(passport);



var addtocart=require("./passport/routes/index");
var login = require('./passport/routes/Login');
//var amountInkillo;
//sample data for ratings
let ratings = [{

    name: "fiveStar",
    value: 123,
    ///icon=
},
{

    name: "foureStar",
    value: 123,
    ///icon=
},
{

    name: "threeStar",
    value: 123,
    ///icon=
},
{

    name: "twoStar",
    value: 123,
    ///icon=
},
{

    name: "oneStar",
    value: 123,
    ///icon=
}]

//sample data for uploaoded items for a single merchant
let UploadedItems = [{
    name: "Onion",
    amount: 200,
    measuredIn: "killograms",
    expireDate: "23/5/2015",
    description: "Description for the food"
},
{
    name: "Carrots",
    amount: 400,
    measuredIn: "killograms",
    expireDate: "23/5/2015",
    description: "Description for the food"
},
{
    name: "Milk",
    amount: 100,
    measuredIn: "litters",
    expireDate: "23/5/2015",
    description: "Description for the food"
}]

//sample data for products to be puschased iim gonna use for both orders and availabe products
let onion = [{
    amount: 34,
    shopeAddress: "Shone lesho mazoria",
    merchantAddress: "+25100000001",
    pricePerKillo: 30.00,

}, {
    amount: 21,
    shopeAddress: "Ambaricho Wasara",
    merchantAddress: "+25100000031",
    pricePerKillo: 28.00,
}
]
let carrot = [{
    amount: 70,
    shopeAddress: "Shone lesho mazoria",
    merchantAddress: "+25100000001",
    pricePerKillo: 15.00,

}, {
    amount: 200,
    shopeAddress: "Ambaricho Wasara",
    merchantAddress: "+25100000031",
    pricePerKillo: 20.00,
}
]
let tomato = [{
    shopeName: "Salfiso Supermarket",
    amount: 50,
    measuredIn: "killograms",
    shopeAddress: "Shone lesho mazoria",
    merchantAddress: "+25100000001",
    pricePerKillo: 30.00,

}, {
    amount: 56,
    shopeAddress: "Ambaricho Wasara",
    merchantAddress: "+25100000031",
    pricePerKillo: 25.00,
}
]
//well  i changed my mind better to do separetly
let requested_items = [{
    name: "onion",
    amount: "47 killo",
    imageSource: "./img/requestedItems/shinkutt.jpg"

}, {
    name: "tomato",
    amount: "90 killo",
    imageSource: "./img/requestedItems/download (1).jpg"
}, {
    name: "carrot",
    amount: "100 killo",
    imageSource: "./img/requestedItems/carot.jpg"
}
]

const shopSMfullName = "shopSMfullName";
const customerfullname = "customerfullname";
const logisticfullname = "logisticfullname";

//sample data it ..later we will change this to the data fetched from database

let totalmenus_Burger = [{
    dishName: "Cheezy Crunch Burger",
    imageSource: "./img/TotalMenus/CheezyCrunchBurger.jpg",
    unitPrice: "120 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}, {
    dishName: "Thick-Blend Burger",
    imageSource: "./img/TotalMenus/Thick-Blend Burger.png",
    unitPrice: "100 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}];
let totalmenus_Pizza = [{
    dishName: "Cheezy Crunch Burger",
    imageSource: "./img/TotalMenus/ChezzyCrunchBurger.png",
    unitPrice: "120 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}, {
    dishName: "Thick-Blend Burger",
    imageSource: "./img/TotalMenus/Thick-Blend Burger.png",
    unitPrice: "100 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}];
let totalmenus_Drink = [{
    dishName: "Cheezy Crunch Burger",
    imageSource: "./img/TotalMenus/ChezzyCrunchBurger.png",
    unitPrice: "120 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}, {
    dishName: "Thick-Blend Burger",
    imageSource: "./img/TotalMenus/Thick-Blend Burger.png",
    unitPrice: "100 Birr",
    discription: "2 Spicy, crunchy mini fillets with 2 chesse slices, lettuce & tomato coverd in tangy dressing on a burger bun."

}];

//end of sample data..

//Express Middle Ware
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



//route to handle the login with google this works only for custormers


//Method Override Middle Ware
app.use(methodOverride('_method'));  
//the express session midleware
app.use(session({
    secret : 'secret',
    resave : true , 
    saveUninitialized : true
}));
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//flash midle ware 
app.use(flash());
app.post('/login',(req, res, next)=>{
    
    
    passport.authenticate('local',{
        successRedirect: '/Menu',
        failureRedirect: '/login',
          //failureFlash: true

    })(req, res, next);
});


//routing Middle Ware

app.use('/ProfileChange' , profileChange);
//end of google login option

app.get('/Menu', (req, res) => {
    // TotalMenu.find({})
    // .then(totalmenus=>{
    //     res.render('HomePages/Menu', {
    //         totalmenus:totalmenus
    //     });
    // });

    res.render('HomePages/Menu', {
        totalmenus_Burger: totalmenus_Burger,
        totalmenus_Pizza: totalmenus_Pizza,
        totalmenus_Drink: totalmenus_Drink,
        HomePage: home
    })
});
//Home Route
app.get('/', (req, res) => {
    res.render('HomePages/Home', {
        HomePage: home
    })
});
//Home contact route
app.get('/Contact', (req, res) => {
    res.render('HomePages/comment', {
        HomePage: home
    })
});

//Homepage about route
app.get('/About', (req, res) => {
    res.render('HomePages/about', {
        HomePage: home
    })
});

//the centeral storage manager route

   //Homepage Login route



//the centeral storage manager route

app.get('/csm', (req, res) => {
    res.render('centra-sm', {
        CSMfullName: CSMfullName
    });
});


//CSM--checkReport route
app.get('/checkReport', (req, res) => {
    let report = [{
        MenuItem: "sofi",
        NumberSold: 6,
        unitprice: 7,
        Totalprice: 45
    },
    {
        MenuItem: "kali",
        NumberSold: 6,
        unitprice: 7,
        Totalprice: 45

    }
    ]
    res.render('CentralSM/checkReport', {
        report: report,
        CSMfullName: CSMfullName

    }
    );
});

//CSM--order route 
app.get('/order', (req, res) => {
    res.render('CentralSM/order', {
        CSMfullName: CSMfullName
    });
});
//CSM--registor route 
app.get('/registor', (req, res) => {
    res.render('CentralSM/registor', {
        CSMfullName: CSMfullName,
        emailAddress : "example@gmail.com"
    });
});

//casher main page -route 
app.get('/casher_customerOrder', (req, res) => {
    res.render('casher/casher', {
        casherfullName: casherfullName,
        totalmenus_Burger: totalmenus_Burger,
        totalmenus_Pizza: totalmenus_Pizza,
        totalmenus_Drink: totalmenus_Drink
    })
});
//casher-neworder route 
app.get('/Casher_NewOrder', (req, res) => {
    res.render('casher/newOrder', {
        casherfullName: casherfullName,
        totalmenus_Burger: totalmenus_Burger,
        totalmenus_Pizza: totalmenus_Pizza,
        totalmenus_Drink: totalmenus_Drink
    })
});
//casher -report route 
app.get('/Casher_Report', (req, res) => {
    res.render('casher/Report', {
        casherfullName: casherfullName
    })
});



//logistic 
//SSM
//customer 




//sample data ....

app.get('/viewOrdersOfDeliveryAgent', (req, res) => {
    let ordersfrom = [{

        DestinationPlace: 'Bole',
        NumberOfCars: 5,
        ArrivalTime: '10:54 AM',
        DestinationTime: '11:05 AM'
    },
    {
        DestinationPlace: '4-kil0',
        NumberOfCars: 5,
        ArrivalTime: '1:54 AM',
        DestinationTime: '1:05 AM'

    }
    ]
    res.render('Logistic/viewOrdersOfDeliveryAgent', {
        ordersfrom: ordersfrom,
        logisticfullname: logisticfullname

    }
    );
});

//logistic ---orders from CSM route 

app.get('/viewOrderofCSM', (req, res) => {
    res.render('Logistic/viewOrderofCSM', {
        logisticfullname: logisticfullname

    });
});

//logistic  --orders from purcheser route 
app.get('/viewOrdersOfpurcheser', (req, res) => {
    let ordersfrom = [{

        DestinationPlace: 'merekato',
        NumberOfCars: 5,
        ArrivalTime: '10:54 AM',
        DestinationTime: '11:05 AM'
    },
    {
        DestinationPlace: 'merekato',
        NumberOfCars: 3,
        ArrivalTime: '1:54 AM',
        DestinationTime: '1:05 AM'

    }
    ]
    res.render('Logistic/viewOrdersOfpurcheser', {
        logisticfullname: logisticfullname
    })
});



// customer 

app.get('/customer/vieworder', (req, res) => {
    res.render('customer/viewOrders', {
        customerfullname: customerfullname,
        totalmenus_Burger: totalmenus_Burger,
        totalmenus_Pizza: totalmenus_Pizza,
        totalmenus_Drink: totalmenus_Drink
    })
});


app.get('/customer/comment', (req, res) => {
    res.render('customer/comment', {
        customerfullname: customerfullname
    })
});

//SSM--order route
app.get('/orders', (req, res) => {
    let orders = [{
        SortOrder: 1,
        DishName: 'corn_soup',
        takeAway: 'yes',
        Done: 'yes'

    },
    {
        SortOrder: 2,
        DishName: 'Burger',
        takeAway: 'no',
        Done: 'yes'


    },
    {
        SortOrder: 3,
        DishName: "pizza",
        takeAway: "yes",
        Done: "yes"


    }
    ]

    res.render('shopSM/orders', {
        orders: orders,
        shopSMfullName: shopSMfullName

    }
    );
});


//shopSM--reportfromcashier route 

app.get('/reportsfromcashier', (req, res) => {
    res.render('shopSM/reportsfromcashier', {
        shopSMfullName: shopSMfullName

    });
});
//shopSM -order route 
app.get('/shopSM/orders', (req, res) => {
    res.render('shopSM/orders', {
        shopSMfullName: shopSMfullName
    })
});



//sample data .... later changed when we finish our databse 

app.get('/sendorders', (req, res) => {
    let sendorders = [{
        SortOrder: 1,
        Name: "carrot",
        amount: '50 kilo'

    },
    {
        SortOrder: 2,
        Name: 'onion',
        amount: '10 kilo'


    },
    {
        SortOrder: 3,
        Name: 'salad',
        amount: '7 kilo'



    }
    ]

    res.render('shopSM/sendorders', {
        sendorders: sendorders,
        shopSMfullName: shopSMfullName

    }
    );
});




//shopSM--SendOrders route 
app.get('/sendorders', (req, res) => {
    res.render('shopSM/sendorders', {
        shopSMfullName: shopSMfullName

    });
});
//shopSM--register route 
app.get('/registeration', (req, res) => {
    res.render('shopSM/registeration', {
        shopSMfullName: shopSMfullName

    });
});





//Its related to pursher only
//the purchasers route

//new update here !


app.get('/purshaser', (req, res) => {
    res.render('purchaser', {
        purchaserfullName: purchaserfullName,
        requested_items: requested_items,
        tomato: tomato,
        carrot: carrot,
        onion: onion
    });
});


app.get('/CSMOrders', (req, res) => {
    res.render('purchaser/CSMOrders', {
        purchaserfullName: purchaserfullName,
        requested_items: requested_items,
        tomato: tomato,
        carrot: carrot,
        onion: onion
    });
});


app.get('/request', (req, res) => {
    res.render('purchaser/request', {
        purchaserfullName: purchaserfullName
    });
});



app.get('/ssmRegistor', (req, res) => {
    res.render('ssm_registor', {
        SSMfullName: SSMfullName
    });
});

app.get('/viewRatings', (req, res) => {
    res.render('view_ratings', {
        SSMfullName: SSMfullName
    });
});
app.get('/merchant', (req, res) => {
    res.render('merchant', {
        MerchantName: MerchantName
    });
});
app.get('/viewItems', (req, res) => {
    res.render('viewItems', {
        MerchantName: MerchantName,
        UploadedItems: UploadedItems
    });
});
app.get('/availableItems', (req, res) => {
    res.render('availableItems', {
        purchaserfullName: purchaserfullName,
        requested_items: requested_items,
        tomato: tomato,
        carrot: carrot,
        onion: onion
    });
  });

app.use("/addtocart",addtocart);
app.use('/login', login);


const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});
