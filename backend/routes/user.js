const userController = require("../controllers/userController");
const router = require("express").Router();

//* Your code right here
router.get("/username/:userName", userController.getUserByUsername);
router.get("/email/", userController.getUserByEmail);
router.post("/", userController.addUser);
router.put("/id/:id",userController.changeInfo);
router.get("/", userController.getAllUser);
router.put("/add-product/:id", userController.addProduct)
router.put("/delete-product/:id", userController.deleteProduct)

module.exports = router;