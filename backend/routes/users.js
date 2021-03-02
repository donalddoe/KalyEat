const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Admin = require('../models/admin')
const Student = require('../models/Student')

router.get("/signin", (req,res)=> {
    res.send("Sign in here");
});

router.post("/signin", (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        
        res.send({ msg: "Please fill in all fields" });
    }
    
    Student.findOne({ username: username}).exec((err, student) =>{
        if (student) {
            bcrypt.compare(password, student.password).then(doMatch => {
                if (doMatch) {
                    return res.send({ message: `Welcome ${student.firstname} (Student)` });    
                }    
            }    
        )}
    

        if(!student) {
            Admin.findOne({ username: username}).exec((err, admin) =>{
                if (admin){
                    bcrypt.compare(password, admin.password).then(doMatch => {
                        if (doMatch) {
                            return res.send({ message: `Welcome ${admin.firstname} (Admin)` });    
                        }    
                    })
                }
                if (!admin){
                    return res.send({ message: `Not a user` });
                }
            
             })

         }
    })
  
    
});

module.exports = router;