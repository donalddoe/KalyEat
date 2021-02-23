const mongoose = require('mongoose')


const student = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    role : {
        type : String,
        required : true,   
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('mytable', student);
