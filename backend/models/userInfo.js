const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
        email: {
            type: String,
            require: true,
            unique: true
        },
        userName: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        dateOfBirth: { //UNIX date format
            type: Date,
            require: true
        },
        sex: {
            type: Number,
            require: true
        },
    },
    {timestamps: true}
);

module.exports = User = mongoose.model("User", userSchema);

