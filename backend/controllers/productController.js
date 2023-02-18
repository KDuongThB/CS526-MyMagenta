const {Product, Chemical, Step} = require("../model/product");
const productController = {
    // Your code right here
    // Undone
    addProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().populate("chemicals");
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteProductbyID: async (req, res) =>{
        try {
            await Step.updateMany(
                { productName: req.params.id },
                { $pull: { productName: req.params.id } }
            );
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted !");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateProductbyID: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            await product.updateOne({ $set: req.body });
            res.status(200).json("Update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getProductbyID: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id).populate();
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getProductbyName: async (req, res) => {
        try {
            const product = await Product.find({ productName: req.params.name }).populate();
            res.status(200).json(product[0]._id);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addChemical: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            await product.updateOne({ $push: {chemicals: req.body.chemical }});
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
};

module.exports = productController;