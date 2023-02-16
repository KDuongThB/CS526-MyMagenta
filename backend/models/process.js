const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processSchema = new Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    steps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Step"
    }]
})
let Process = mongoose.model("Process", processSchema);
module.exports = {Process}