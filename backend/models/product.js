const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: String,
    require: true,
  },
  skin: {
    type: String,
  },
  chemicals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chemical",
      require: true,
    },
  ],
  uses: [
    {
      type: String,
    },
  ],
  instructions: [
    {
      type: String,
    },
  ],
  limit: [
    {
      type: Boolean,
    },
  ],
  stepType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StepType",
    require: true,
  },
  imageID: {
    type: String,
  },
});
let  Product = mongoose.model("Product", productSchema);
module.exports = {Product}
