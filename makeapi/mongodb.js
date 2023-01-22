const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-com';
async function dbConnect() { 
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('products');
    // let res=await collection.find({}).toArray()
    // console.log(res);
}
module.exports = dbConnect;