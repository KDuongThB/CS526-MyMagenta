const {Product, Chemical} = require("../model/product");

const productController = {
    // Your code right here
    // Undone
    addProduct: async (req, res) => {
        try {
            // Check if chemical is in the chemical table
            // const chemicals_input = req.body.chemicals;
            // chemicals_input.array.forEach(element => {
            //     var x = element.
            // });
            const chemicals = Chemical.find({chemicalName: chemicals_input})
            
            const newProduct = new Product(req.body);
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = productController;