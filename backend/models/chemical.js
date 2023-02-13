const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chemicalSchema = new Schema({
    chemicalName: {
        type: String,
        require: true
    },
    avoid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chemical"
    }]
})

module.exports = Chemical = mongoose.model("Chemical", chemicalSchema);