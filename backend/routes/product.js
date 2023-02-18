const productController = require("../controllers/productController");
const router = require("express").Router()

// Your code right here
// Add a new product
router.post("/", productController.addProduct);
// Get all products
router.get("/", productController.getAllProducts);
// Delete product using mongodb ID 
router.delete("/id/:id", productController.deleteProductbyID);
// Update product using mongodb ID 
router.put("/id/:id", productController.updateProductbyID);
// Get product using mongodb ID 
router.get("/id/:id", productController.getProductbyID);
// Get product using product name
router.get("/name/:name", productController.getProductbyName);
// Add chemical for product
router.put("/add-chemical/id/:id", productController.addChemical);
module.exports = router;