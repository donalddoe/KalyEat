
const express = require('express')
const router = express.Router()
const bycrpt = require('bcrypt')
const passport = require("passport")
const student = require('../models/Student')


//Login Method
router.post('/login', async (req, res, next) => {
    // console.log(req.body)
    passport.authenticate('local', res.send("Logged in"));
  });


//Post method
router.post('/signup', async (req, res) =>{
    const saltPassword = await bycrpt.genSalt(10)
    const securePassword = await bycrpt.hash(req.body.password, saltPassword)
    const studentUser = new student ({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:securePassword,
        age:req.body.age
    })
    studentUser.save()
    .then(data => {
        res.json(data)
    })
    .catch(error =>{
        res.json(error) 
    })
})



module.exports = router