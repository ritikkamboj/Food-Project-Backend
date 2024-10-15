const userModel = require("../models/userModel");

const getUserController = async (req, res) => {

    try {
        //find user 
        const user = await userModel.findById({ _id: req.body.id })
        //validation 
        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User not found'
            })
        }
        //hide password 
        user.password = undefined;

        res.status(200).send({
            success: true,
            message: 'user get successfully',
            user
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: 'Error in Get User API',
            err
        })
    }
}

module.exports = { getUserController };