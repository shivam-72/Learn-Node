const express = require('express');
const app = express();
const reqFilter = require('./middleware');//from this we can add from outside
const route=express.Router()//this will apply middleware to group of route
//with the help of this we can apply middleware to all the routes
//app.use(reqFilter);
app.use(reqFilter);
app.get('/', reqFilter, (req, res) => {//in this we are only appling middleware
    //to this route by passing parameter as a middleware
    res.send('welcome to Home page')
});
app.get('/users', (req, res) => {
    res.send('welcome to users page')
});
route.get('/about', (req, res) => {
    res.send('welcome to account page')
});
route.get('/contact', (req, res) => {
    res.send('welcome to contact page')
})
app.use('/', route);
app.listen(5000);
//to use in group we use route.get when we apply midlle ware and app.get 
//when we dont applyu