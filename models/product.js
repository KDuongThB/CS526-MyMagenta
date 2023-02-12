const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema()

module.exports = Product = mongoose.model("Product", productSchema);