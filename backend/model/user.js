const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        // unique: true
    },
    userName: {
        type: String,
        require: true,
        // unique: true,
    },
    password: {
        type: String,
        // require: true,
    },
    dateOfBirth: { //UNIX date format
        type: Date,
        // require: false
    },
    sex: {
        type: Number,
        // require: true
    },
},
    { timestamps: true }
);
let User = mongoose.model("User", userSchema);
module.exports = { User }
 