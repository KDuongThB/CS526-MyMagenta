const {Process} = require("../model/process");
const {Step} = require("../model/step")

const processController = {
    // Your code right here
    getAllProcess: async (req, res) => {
        const process = await Process.find().populate('userID').populate('steps')
        res.status(200).json(process);
    },
    addNewProcess: async (req, res) => {
        try {
            const newProcess = new Process(req.body)
            const savedProcess = await newProcess.save()
            res.status(200).json(savedProcess)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    addStep: async (req, res) => {
        try {
            const process = await Process.findById(req.params.id)
            await process.updateOne( { $push: { steps: req.body.stepID } })
            res.status(200).json("Add successfully")
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
    getProcessByUser: async (req, res) => {
        try {
            const process = await Process.find({userID :req.params.userID});
            res.status(200).json(process)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    },
    deleteAllProcess: async (req, res) => {
        try {
            const processes = await Process.deleteMany({})
            res.status(200).json("Deleted")
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
};

module.exports = processController;