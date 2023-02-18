const processController = require("../controllers/processController");
const progressController = require("../controllers/progressController");

const router = require("express").Router()

// Your code right here

// GET ALL PROGRESS
router.get("/", progressController.getAllProgress)
module.exports = router;