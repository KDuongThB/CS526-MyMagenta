const userController = require("../controllers/userController");
const router = require("express").Router();

//* Your code right here
router.get("/username/:userName", userController.getUserByUsername);
router.get("/email/", userController.getUserByEmail);
router.post("/", userController.addUser);
router.put("/username/",userController.changeInfo);
router.get("/", userController.getAllUser);

module.exports = router;