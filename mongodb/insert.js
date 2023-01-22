const dbConnect = require('./mongodb');
const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({
        name: 'p10',
        brand: 'shivam',
        price: 200,
        category: 'mobile'
    });
    if (result.acknowledged) { 
        console.log("inserted");
    }
}
//insert();