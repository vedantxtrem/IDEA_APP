// this will hold the schema for the user


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    userId :{
        type : String,
        required : true,
        unique : true
    },
    password  : {
        type :String,
        required : true,
        minLength : 8
    },
    email : {
        type : String,
        required : true ,
        unique : true,
        lowercase : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }

},{timestamps : true});


//Define the collections name where it will be stored

module.exports = mongoose.model("User",userSchema);