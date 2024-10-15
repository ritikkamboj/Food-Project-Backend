const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    try {
        const token = req.headers['authorization'].split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send(
                    {
                        success: false,
                        message: 'Unauthorised user access',
                        err
                    }
                )
            }
            else {
                req.body.id = decode.id;
                next();

            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in authentication, please provide token",
            err
        })


    }

}

module.exports = { authMiddleware };