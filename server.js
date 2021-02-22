const express = require('express');
const app = express()
const connectDB = require('./backend/config/db')
const student = require('./backend/routes/student')
const cors = require('cors')



app.use(express.urlencoded({extended : false}));

//Config dotenv
require('dotenv').config({
    path: './config/config.env' 
})



//connect to Database
connectDB()
 
app.use(express.json())
app.use(cors())
app.use('/api', student)

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
 })



app.listen(5000, () => console.log('Server is Up and Running'));