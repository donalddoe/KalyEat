const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const student = require('../models/Student')
const Student = require('../models/Student')

//Get sign up page
router.get("/signup", (req,res) => {
    res.send("Sign up here")
})

//Post sign up method
router.post('/signup',  (req, res, next) =>{
    const { firstname, lastname, username, password, password2, age} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!firstname || !lastname || !username || !password || !password2 || !age){
        errors.push({ msg: "Please fill in all fields" });
        res.send({ msg: "Please fill in all fields" });
    } 
    // making sure passwords match
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }
    // password length should more than 6
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters" });
    }
    //making sure there are no errors
    if (errors.length > 0) {
        res.send(errors);
    }
    else {
        //
        Student.findOne({ username: username }).exec((err, student) => {
            if(student)
            {
                errors.push({ msg: "Username already registered" });
                res.send({ msg: "Username already registered" });
            }
            else {
                const newStudent = new Student({
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    password: password,
                    role: "student",
                    age: age
                });

                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newStudent.password, salt, (err, hash) => {
                    if (err) throw err;
                    //save pass to hash
                    newStudent.password = hash;
                    //save user
                    newStudent
                        .save()
                        .then((value) => {
                        
                        res.send("Student Created");
                        })
                        .catch((value) => console.log(value));
                    }) 
                
                )
            }
        });
    }
})



module.exports = router;