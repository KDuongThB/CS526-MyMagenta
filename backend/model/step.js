const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepSchema = new Schema({
    stepType: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "StepType"
    },
    process: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Process"
    },
    dayOfWeek: {
        type: Number,
        require: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    Order: {
        type: Number,
    },
});
let Step = mongoose.model("Step", stepSchema);
module.exports = {Step};