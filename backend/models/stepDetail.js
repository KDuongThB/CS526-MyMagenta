const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepDetailSchema = new Schema({
    step: {
        type: mongoose.Schema.Types.ObjectId
    },
    date: {
        type: Date,
        require: true
    },
    isDone: {
        type: Boolean,
        require: true
    }
})
let StepDetail = mongoose.model("StepDetail", stepDetailSchema);
module.exports = {StepDetail};