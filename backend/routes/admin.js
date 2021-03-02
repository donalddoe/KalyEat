const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require('../models/Student');
const Admin = require('../models/admin');
const Menu = require('../models/menus');

router.get("/addadmin", (req,res) => {
    res.send("Add admin");
});

router.post('/addadmin',  (req, res) =>{
    const { name, username, password, password2, role} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!name || !username || !password || !password2  || !role){
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
        Admin.findOne({ username: username }).exec((err, admin) => {
            if(admin)
            {
                errors.push({ msg: "Username already registered" });
                res.send({ msg: "Username already registered" });
            }
            else {
                const newAdmin = new Admin({
                    name: name,
                    username: username,
                    password: password,
                    role: role,
                    
                });

                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
                    if (err) throw err;
                    //save pass to hash
                    newAdmin.password = hash;
                    //save user
                    newAdmin
                        .save()
                        .then((value) => {
                        
                        res.send("Admin Created");
                        })
                        .catch((value) => console.log(value));
                    }) 
                
                )
            }
        });
    }
});

router.delete("/deladmin/:id", (req, res) => {
    const aId = req.params.id;
    Admin.deleteOne({ _id: mongoose.Types.ObjectId(aId) }, (err) => {
      if(err){
          console.error(err);
          res.send({ error: err });
          return;
      }
   
      console.log("ADMIN DELETED");
      res.send({ msg: "Admin DELETED" });
   
    });
})

router.get("/addstudent", (req,res) => {
    res.send("Add student");
});

router.post('/addstudent',  (req, res) =>{
    const { firstname, lastname, username, password, password2, age, role} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!firstname || !lastname || !username || !password || !password2 || !age || !role){
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
                    role: role,
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
});

router.post('/addfood',  (req, res) =>{
    const { foodName, price, foodimg, day, description} = req.body;
    let errors = [];

    // making sure all input fields are filled
    if(!foodName || !price || !foodimg || !day  || !description){
        errors.push({ msg: "Please fill in all fields" });
        res.send({ msg: "Please fill in all fields" });
    } 

    //making sure there are no errors
    if (errors.length > 0) {
        res.send(errors);
    }
    else 
    {
        //Add to menu         
        const newMenu = new Menu({
            foodName: foodName,
            price: price,
            foodimg: foodimg,
            day: day,
            description: description,
                    
        });

        newMenu
            .save()
            .then((value) => {
                        
            res.send("Food Added");
            })
            .catch((value) => console.log(value));


    }
        
    
});


router.get("/allusers", (req,res) => {
    Admin.find({},(err,admin) => {
      if(err){
          console.error(err);
          res.send({error : err});
          return;
      }
      adminNum = admin.length
      console.log("ADMIN LIST READ");
      
    });
  
  
  Student.find({},(err,student) => {
    if(err){
        console.error(err);
        res.send({error : err});
        return;
    }
    num = student.length
    console.log("Student LIST READ");
    res.send({"Students" : num, "Admins" : adminNum, });

  });
});

router.get("/allfoods", (req,res) => {
    Menu.find({},(err,menu) => {
      if(err){
          console.error(err);
          res.send({error : err});
          return;
      }
      num = menu.length
      console.log("Food LIST READ");
      res.send({"Foods" : num,  });
    });
  

});


module.exports = router;