const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();
//body parser can also be used when we want to parse body data but it is
//available in old version of express.this is new way
app.use(express.json());

app.put('/', async (req, res) => {
    let data = await dbConnect();
    let result = data.updateOne({ name: "m40" }, { $set:  req.body  });
    res.send({ result: 'update' });
});
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data=await data.find({}).toArray();
    res.send(data);
})
app.post('/', async(req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})
//params is paased by api
app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    const del=data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send("done");
});
app.listen(5000);
//can we pass body int get method
//no