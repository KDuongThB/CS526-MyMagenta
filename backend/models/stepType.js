const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepTypeSchema = new Schema({
    stepTypeName: {
        type: String,
        require: true,
        unique: true
    }
})
let StepType = mongoose.model("StepType", stepTypeSchema);
module.exports = {StepType};