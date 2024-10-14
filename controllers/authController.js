const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body;

        if (!userName || !email || !password || !phone) {
            return res.status(500).send({
                success: "fail",
                message: "Enter all the Fields properly ",
            });
        }
        //check user

        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(500).send({
                success: "fail",
                message: "Email Already Registered please Login",
            });
        }

        //hashing our password 
        var salt = bcrypt.genSaltSync(10);

        const hashedPassword = await bcrypt.hash(password, salt);
        // create a new user
        const user = await userModel.create({
            userName,
            password: hashedPassword,
            phone,
            email,
            address,
        });
        res.status(201).send({
            success: true,
            message: "Sucessfully Registered ",
            user
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in registeration",
            err,
        });
    }
};

const loginController = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please Provide email and password "
            })
        }
        //chcking user 
        const user = await userModel.findOne({ email: email })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not exist "
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "invalid password "
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        user.password = undefined;


        res.status(201).send({
            success: true,
            message: 'login successfully',
            token,
            user
        })
    }
    catch (err) {

        console.log(err);
        res.status(500).send({
            success: false,
            message: 'Error In Login API',
            err
        })
    }

}

module.exports = { registerController, loginController };
