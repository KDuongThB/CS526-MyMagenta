const chemicalController = require("../controllers/chemicalController");

const router = require("express").Router();

// Your code right here
router.post("/", chemicalController.addChemical);

module.exports = router;