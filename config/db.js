const mongoose = require('mongoose');

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`successfully connected to Database ${mongoose.connection.host}`.america.bgGreen);

    }
    catch (err) {
        console.log('DB Error', err);

    }
}
module.exports = connectDb;