const {Progress} = require("../model/progress");

const progressController = {
    // Your code right here
    getAllProgress: async (req, res) => {
        try {
            const progress = await Progress.find().populate("images");
            res.status(200).json(progress);
        } catch (error) {
            res.status(500).json({ error: "Something went wrong." });
        }
    }
};

module.exports = progressController;