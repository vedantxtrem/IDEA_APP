const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const serverConfig = require('./configs/server.config');
//const { init } = require('./Model/user.model');
const userModel = require('./Model/user.model');


const app = express();


// logic to connect mongodb and create an admin user
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;
db.on("error",()=>{
    console.log("error while connecting to DB");
});
db.once("open",()=>{
    console.log("DB is connected");
    init();
})

async function init(){
    /* Initilie mongodb and create admin user */
    let admin  = await userModel.findOne({
        userId : "admin"
    })
    if(admin){
        console.log("Admin user is alredy exist");
        return;
    }

    admin = await userModel.create({
        name : "Vedant Sahu",
        userId : "admin",
        email : "vedant@ssipmt.com",
        userType : "ADMIN",
        password : "Vedant_01"
    });
    console.log(admin);
}



app.listen(serverConfig.PORT,()=>{
    console.log(`server started the port n. is : ${serverConfig.PORT}`);
})