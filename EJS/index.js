const express = require("express");
const app = express();
const path = require('path'); // set paths ke liya require kiya hai 

const port = 8080;

app.set('view engine', 'ejs'); // ejs ko require isliya nhi kiya because vo express ejs ko internally require kr leta hai 
//ejs genral template banane mai help krta hai 
// Ex:- instagram mai cororo page hai tho sab ke liya bar bar new html page nhi banyegay 
// tho hum ejs se 1 template bana lengay fir ushe hi multiple insta page ke liya bar bar use krengay 
//view engine help krta hai template banane mai()
app.set('views', path.join(__dirname, '/views')); // srif app.set('view engine', 'ejs'); views connect nhi ho rha tha index.js seb
//but app.set('views', path.join(__dirname, '/views')); views wala folder ko render krne ke liya paths set kiya hai kahi bhi views hoga vo render ho jayga easly

app.get("/",(req,res)=>{
    // res.send("this is the home page");
    res.render("home.ejs"); // express by default views wala folder find krega fir uske ander jake home.ejs ko render krega 
      
});

app.get("/hello",(req, res)=>{
    res.send("hello guys")
});

app.listen(port,()=>{
    console.log(`there is the port :${port}`);
});