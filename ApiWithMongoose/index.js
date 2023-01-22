const express = require('express');
require('./config');
const product = require('./product');

app.use(express.json());
const app = express();
app.post('/create', async (req,res) => {
    let data = new product(req.body);
    //console.log(req.body);
    let result = await data.save();//this wil save to database
    res.send(result);
});
app.get('/list', async(req, res) => {
    let data = await product.find();
    res.send(data);//this will give all the data
});
//in delete we should pass id through params because only we have to delete
app.delete('/delete/:_id', async (req, res) => {//to delete data from databse
    //through id
    //req.params will give the parameter passed through postman
    let data = await product.deleteOne(req.params);
    res.send(data);//this will give all the data
});
//we can pass data through both body and params but this is preffered way 
app.put('/update/:_id', async(req, res) => {
    let data = await product.updateOne(
        req.params,{$set:req.body}
    );
    res.send(data);//this will give all the data
});

//search api
app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or": [
                { name: { $regex: req.params.key } },
                { brand:{$regex:req.params.key}}
            ]
        }
    )
});
//we can use put post and delete  to search but get is preffered
app.listen(5000);
