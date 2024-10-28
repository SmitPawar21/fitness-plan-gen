//  EXPRESS SETUP
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//  DATABASE CONNECTION
const {connectDatabase, insertRowUsers} = require("./database/connect");
connectDatabase();

//  EXAMPLE ROUTE
app.get('/', (req, res) => {
    res.status(201).json({message: "Hello Smit"});
});

//  SERVER LISTENING
app.listen(5000, () => console.log("Server connected"));