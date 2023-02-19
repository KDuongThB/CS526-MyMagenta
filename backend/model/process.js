const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processSchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    processType: {
        type: String,
    },
    steps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Step"
    }],
    daysInWeek: [{
        type: Boolean
    }]
})
let Process = mongoose.model("Process", processSchema);
module.exports = {Process}