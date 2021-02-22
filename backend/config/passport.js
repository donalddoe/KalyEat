const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const student = require('../models/Student')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'username'},(username,password,done)=> {
                //match user
                student.findOne({username : username})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'Username doesn\'t exist'});
                 }
                 if (user)
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);

                         
                     } else {
                         return done(null,false,{message : 'Incorrect Password'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        student.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 