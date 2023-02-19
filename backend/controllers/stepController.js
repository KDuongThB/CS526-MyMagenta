const {Step} = require("../model/step");

const stepController = {
    // Your code right here
    addNewStep: async (req, res) => {
        try {
            const newStep = new Step(req.body)
            const savedStep = await newStep.save()
            res.status(200).json(savedStep)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getAllStep: async (req, res) => {
        try {
            const steps = await Step.find()
            res.status(200).json(steps);
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
};

module.exports = stepController;