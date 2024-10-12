const express = require("express");
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const app = express();

// middlewares 

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
// app.use();


// creating route and server

app.get("/", (req, res) => {
    res.status(200).send('<h1> Welcome to the My backend project </h1>');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.america.green);

})
