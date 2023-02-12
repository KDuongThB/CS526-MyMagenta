const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepDetailSchema = Schema()

module.exports = StepDetail = mongoose.model("StepDetail", stepDetailSchema);