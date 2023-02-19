const {Product} = require("../model/product");
const {Chemical} = require("../model/chemical")
const {Step} = require("../model/step")
const productController = {
    // Your code right here
    // Undone
    addProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            const savedProduct = await newProduct.save();
            console.log(req.body)
            res.status(200).json(savedProduct);
        } catch (error) {
            console.log(error)
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
    },
    deleteAllProduct: async (req, res) => {
        try {
            await Product.deleteMany()
            res.status(200).json("Deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    checkTwoProduct: async (req, res) => {
        try {
            // productA
            // productB
            flag = false
            const productA = await Product.findById(req.body.productA)
            const productB = await Product.findById(req.body.productB)
            // console.log(productA)
            const listA = productA.chemicals
            const listB = productB.chemicals

            var chemical1

            var c1
            var c2

            for (var i = 0; i < listA.length; i++){
                    chemical1 = await Chemical.findOne({chemicalName: listA[i]}).populate("avoid")
                    
                    if (chemical1 != null)
                    {
                        var listA_ = chemical1.avoid
                        var listA__ = [];
                        for (var e = 0; e < listA_.length; e++){
                            listA__.push(listA_[e]['chemicalName'])
                        }

                        console.log(listA__)
                        // Check phan tu listA_ va listB
                        for (var j = 0; j < listB.length; j++){
                            if (listA[i] == 'BHA' && listB[j] == 'AHA')
                            {
                                console.log("here")
                                console.log(listA__.includes(listB[j]))
                                // console.log(listA_)
                                console.log(listB)
                            }
                            flag = listA__.includes(listB[j])
                            if (flag == true)
                            {
                                console.log("Here")
                                c1 = listB[j]
                                c2 = listA[i]
                                p1 = req.body.productA
                                p2 = req.body.productB
                                break
                            }
                        }
                    }
            }
            console.log(flag)
            result = {"p1": p1, "p2": p2, "c1": c1, "c2": c2, "result": flag}
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
};

module.exports = productController;