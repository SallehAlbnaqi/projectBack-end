const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute=require("./routers/routes/signUpRoute")
const loginRoute=require("./routers/routes/loginRoute")
const foodRoute=require("./routers/routes/foodModel")


app.use(signUpRoute)
app.use(loginRoute)
app.use(foodRoute)


  // ^ جبنا الساين واللوقن عشان نستخدمهم بالسيرفر
app.get("/", (req, res) => {
    res.status(200).json("welcome customers");
  });
  




////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
