const express = require("express");
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require("./config/db");

dotenv.config();

connectDb();

const app = express();

// middlewares 

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
// app.use();

//importing routes 

app.use('/api/v1/test', require('./routes/testRouter'));

app.use('/api/v1/auth', require('./routes/authRouter'));

app.use('/api/v1/user', require('./routes/userRoute'))

app.use('/api/v1/resturent', require('./routes/resturentRoute'));

// creating route and server

app.get("/", (req, res) => {
    res.status(200).send('<h1> Welcome to the My backend project </h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.america.green);

})
