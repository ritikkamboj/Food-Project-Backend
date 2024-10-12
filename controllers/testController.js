
const testController = (req, res) => {
    try {
        res.status(200).send('<h1> Test Route server is started </h1>')


    }
    catch (err) {
        console.log('erro is', err);

    }

}

module.exports = testController;