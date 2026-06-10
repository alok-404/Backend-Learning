/*express => node js application */


const express = require("express"); //we are creating server here

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get("/home", (req,res)=>{
    res.send("Welcome to Home Page");
});

app.get("/about", (req,res)=>{
    res.send("Welcome to About Page");  
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000 ...");  //we are listening to the port 3000 and starting the server
})