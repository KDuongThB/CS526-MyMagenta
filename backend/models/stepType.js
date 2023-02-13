const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepTypeSchema = new Schema({
    stepTypeName: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = StepType = mongoose.model("StepType", stepTypeSchema);