const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
    try {
        //find user
        const user = await userModel.findById({ _id: req.body.id });
        //validation
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User not found",
            });
        }
        //hide password
        user.password = undefined;

        res.status(200).send({
            success: true,
            message: "user get successfully",
            user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in Get User API",
            err,
        });
    }
};

// UPDATE USER

const updateUserController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.body.id });

        if (!user) {
            return res.status(500).send({
                success: false,
                message: "user not found ",
                err,
            });
        }

        // Updating

        const { userName, address, phone } = req.body;

        if (userName) {
            user.userName = userName;
        }
        if (address) {
            user.address = address
        }
        if (phone) {
            user.phone = phone;
        }
        await user.save();

        res.status(200).send({
            success: true,
            message: "User is updated successfully ",

        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error in updating profile",
            err,
        });
    }
};

module.exports = { getUserController, updateUserController };
