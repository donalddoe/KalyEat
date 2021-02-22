const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const admin = new Schema(
    {
    name: String, 
    password: String, 
    phone: String, 
    created_at: String, //from server side
    role: String //from server side
  });
  
  module.exports = mongoose.model("Admin", admin);