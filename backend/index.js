//  EXPRESS SETUP
const express = require("express");
const cors = require("cors");
const app = express();
const dataRouter = require("./routers/dataRouter");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

//  DATABASE CONNECTION
const {connectDatabase, insertRowUsers} = require("./database/connect");
connectDatabase();

app.use('/', dataRouter);

//  EXAMPLE ROUTE
app.get('/', (req, res) => {
    res.status(201).json({message: "Hello Smit"});
});

//  SERVER LISTENING
app.listen(5000, () => console.log("Server connected"));