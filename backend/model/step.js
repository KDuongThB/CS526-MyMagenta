const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepSchema = new Schema({
    stepType: {
        type: String,
    },
    process: {
        type: mongoose.Schema.Types.ObjectId,
    },
    dayOfWeek: {
        type: Number,
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