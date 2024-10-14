const userModel = require("../models/userModel");

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

        // create a new user
        const user = await userModel.create({
            userName,
            password,
            phone,
            email,
            address,
        });
        res.status(201).send({
            success: true,
            message: "Sucessfully Registered ",
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
        const user = await userModel.findOne({ email: email, password: password })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not exist "
            })
        }

        res.status(201).send({
            success: true,
            message: 'login successfully'
        })
    }
    catch (err) {

        console.log(err);
        res.status(500).send({
            success: false,
            message: 'Error In Login API',
            error
        })
    }

}

module.exports = { registerController, loginController };
