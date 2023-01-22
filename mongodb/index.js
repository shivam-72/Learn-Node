const dbConnect = require('./mongodb');
//two way to connect databse
//this is one way to handle promise
// dbConnect().then((res) => {
//     res.find().toArray().then((data) =>{
//         console.log(data);
//     });
// });

//second way to handle promise
//this code is used to read data;
const main =async() => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main()