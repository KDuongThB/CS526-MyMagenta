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
};

module.exports = chemicalController;