const stepController = require("../controllers/stepController");

const router = require("express").Router();

// Your code right here
router.post("/", stepController.addNewStep);
router.get("/", stepController.getAllStep);
module.exports = router;