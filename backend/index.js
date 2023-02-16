const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const chemicalRoute = require("./routes/chemical");
const processRoute = require("./routes/process");
const productRoute = require("./routes/product");
const progressRoute = require("./routes/progress");
const stepRoute = require("./routes/step");
const stepDetailRoute = require("./routes/stepDetail");
const stepTypeRoute = require("./routes/stepType");
const userRoute = require("./routes/user");

const port = process.env.PORT || 8000
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Mongodb connected")
})

app.get("/", (req, res) => {
    res.send("Hi");
});

app.get("/test-api", (req, res) => {
    res.send("Hello");
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/chemical", chemicalRoute);
app.use("/v1/process", processRoute);
app.use("/v1/product", productRoute);
app.use("/v1/progress", progressRoute);
app.use("/v1/step", stepRoute);
app.use("/v1/stepDetail", stepDetailRoute);
app.use("/v1/stepType", stepTypeRoute);
app.use("/v1/user", userRoute);

app.listen(port, () => {
    console.log("Server dang chay");
})

module.exports = app;