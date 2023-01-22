const dbConnect = require('./mongodb');
const updateData = async () => {
    let data = await dbConnect();
    let result = data.updateMany(
        { name: 'u10' }, { $set: { name: 'maxpro5' } }
    );
}
//updateData();