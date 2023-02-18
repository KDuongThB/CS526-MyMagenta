const { User } = require("../model/user");

const userController = {
    //? what the fuck?
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    },

    getUserByUsername: async (req, res) => {
        try {
            const user = await User.findOne({ userName: req.params.userName });
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllUser: async (req, res) => {
        try {
            const allUser = await User.find();
            console.log("Here");
            res.status(200).json(allUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteUserByEmail: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.body.email);
            res.status(200).json("Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    changeInfo: async (req, res) => {
        try {
            // TODO
            const userFound = await User.findOne({ userName: req.body.userName });
            if (userFound) {
                await userFound.updateOne({ $set: req.body })
                res.status(200).json("updated");
            }
            else {
                res.status(500).json("Not updated");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = userController;