const productController = require("../controllers/productController");
const router = require("express").Router()

// Your code right here
// Add a new product
router.post("/", productController.addProduct);

module.exports = router;