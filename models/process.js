const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processSchema = new Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    steps: [{
        type: monogoose.Schema.Types.ObjectId,
        ref: "Step"
    }]
})

module.exports = Process = mongoose.model("Process", processSchema);