const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chemicalSchema = new Schema({
    chemicalName: {
        type: String,
        required: true
    },
    avoid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chemical"
    }]
})
let Chemical = mongoose.model("Chemical", chemicalSchema);
module.exports = {Chemical};