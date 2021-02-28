
const express = require('express')
const router = express.Router()
const bycrpt = require('bcrypt')
const student = require('../models/Student')


//Login Method
router.post('/login', async (req, res, next) => {
   
    const result = await student.find(student => student.username == req.body.username);
    if (result) {
        if (result.password == securePassword) {
            res.status(200).send({
                message: "Successfully Logged in"
            })
        } else {
            res.status(200).send( {
                message: "Password incorrect"
            })
        }
    }else {
        res.status(200).send( {
            message: "User not found"
        })
    }
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