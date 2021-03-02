const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student = new Schema({
    firstname:{
        type:String,
        // required:true
    },
    lastname:{
        type:String,
        // required:true
    },
    username:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },

    role:{
        type:String,
    },

    age:{
        type:String,
        // required:true
    },
       
})


module.exports = mongoose.model('Student', student);
