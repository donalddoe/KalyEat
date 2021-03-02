const express = require("express");
const app = express();
const cors = require('cors');
const studentRouter = require("./routes/student");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");




app.use(express.urlencoded({extended : false}));

const database = require("./config/db");

app.use(express.json())
app.use(cors())
app.use("/student", studentRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);


app.listen(5000);