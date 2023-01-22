const dbConnect = require('./mongodb');
const deleteData= async ()=> {
    let data = await dbConnect();
    let result = await data.deleteMany({ name: 'maxpro5' });
    console.log(result);
    //result will print the deleted count so we can find how many data is 
    //deleted
    if (result.acknowledged)
        console.warn("record deleted");
};
//deleteData();