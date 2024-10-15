
const getUserController = async (req, res) => {
    try {
        res.status(200).send('user data')
    }
    catch (err) {
        // res.status.send()
        console.log(err);
        res.status(404).send('error')
    }


}

module.exports = { getUserController };