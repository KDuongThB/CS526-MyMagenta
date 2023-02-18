const chemicalController = require("../controllers/chemicalController");

const router = require("express").Router();

// Your code right here
router.post("/", chemicalController.addChemical);
// Get all chemical
router.get("/", chemicalController.getAllChemical);
// update chemical
router.put("/id/:id", chemicalController.updateChemical);
// Get a chemical
router.get("/id/:id", chemicalController.getAChemical);
// Get name chemical return id
router.get("/name/:name", chemicalController.getChemicalbyName);

// add avoid
router.put("/add-avoid/name/:name", chemicalController.addAvoid)
module.exports = router;