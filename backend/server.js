const express = require("express");
const app = express();


const database = require("./config/db");
app.use(express.urlencoded({extended : false}));

const studentRouter = require("./routes/student");
app.use("/student", studentRouter);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);


app.listen(5000);