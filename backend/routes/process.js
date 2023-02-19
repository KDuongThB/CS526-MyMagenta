const processController = require("../controllers/processController");

const router = require("express").Router()

// Your code right here

// GET ALL PROCESS
router.get("/", processController.getAllProcess)
router.post("/", processController.addNewProcess)
router.put("/add-step/:id",processController.addStep)
router.get("/userID/:userID", processController.getProcessByUser)
router.delete("/", processController.deleteAllProcess)

module.exports = router;    