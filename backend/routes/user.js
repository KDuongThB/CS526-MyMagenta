const userController = require("../controllers/userController");
const router = require("express").Router();

//* Your code right here
router.get("/username/", userController.getUserByUsername);
router.get("/email", userController.getUserByEmail);
router.post("/user/", userController.addUser);
router.put("/username/",userController.changeInfo);

module.exports = router;