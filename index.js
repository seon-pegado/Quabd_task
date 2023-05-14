require("dotenv").config();
const express = require("express");
require("./dbconnect");
const {Router} = require("./Routes/UserRoutes")
const app = express();

app.get('/' , Router)

app.listen(process.env.PORT||3000, ()=>{
    console.log("Running at port 3000");
})