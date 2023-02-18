const {Chemical} = require("../model/chemical");

const chemicalController = {
    // Your code right here
    addChemical: async (req, res) => {
        try {
            const newChemical = new Chemical(req.body);
            const savedChemical = await newChemical.save();
            res.status(200).json(savedChemical);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    },

    getAllChemical: async (req, res) => {
        try {
            const chemical = await Chemical.find().populate();
            res.status(200).json(chemical);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    },

    updateChemical: async (req, res) => {
        try {
            const chemical = await Chemical.findById(req.params.id);
            await chemical.updateOne({ $set: req.body});
            res.status(200).json(chemical);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    },

    getAChemical: async (req, res) => {
        try {
            const chemical = await Chemical.findById(req.params.id).populate("avoid");
            res.status(200).json(chemical);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    },
    
    getChemicalbyName: async (req, res) => {
        try {
            const chemical = await Chemical.find({chemicalName: req.params.name});
            res.status(200).json(chemical[0]._id);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    },
    // Chưa xong
    addAvoid: async (req, res) => {
        try {
            const chemical = Chemical.findById(req.params.id);
            await chemical.updateOne({$set: {avoid: req.body.chemical}});
            res.status(200).json(chemical);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    }
};

module.exports = chemicalController;