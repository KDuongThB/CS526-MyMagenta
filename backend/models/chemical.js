const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chemicalSchema = new Schema()

module.exports = Chemical = mongoose.model("Chemical", chemicalSchema);