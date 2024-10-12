const express = require("express");

const app = express();

// creating route and server

app.get("/", (req, res) => {
    res.status(200).send('<h1> Welcome to the My backend project </h1>');
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log('server is running');

})
