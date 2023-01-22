const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
const saveInDb = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = new product({
    name: "m8",
    price: 200,
    brand: "maxsl",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
//saveInDb();
const updateIndb =async () => {
    const product = mongoose.model("products", ProductSchema);
    let data = await product.updateMany({ name: "m8" }, { $set: { price: 700 } });
    console.log(data);
}
//updateIndb();
const deleteInDb = async () => {
    const product = mongoose.model("products", ProductSchema);
    let data = await product.deleteOne({ name: "m8" });
    console.log(data);
}
//deleteInDb();
const findInDb = async () => {
    const product = mongoose.model("products", ProductSchema);
    let data = await product.find({ name: "k40" });
    console.log(data);
}
// findInDb();