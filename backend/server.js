const express = require('express');
const app = express();
const connectDB = require('./config/db');
const student = require('./routes/student');
const cors = require('cors');
// const admin = require('./routes/admin');


app.use(express.urlencoded({extended : false}));

//Config dotenv
require('dotenv').config({
    path: './config/config.env' 
});



//connect to Database
connectDB();
 
app.use(express.json());
app.use(cors());
app.use('/api', student);
// app.use('/api', admin)


// app.use((req, res, next) => {
//     res.locals.user = req.user;
//     next();
//  });



app.listen(5000, () => console.log('Server is Up and Running'));