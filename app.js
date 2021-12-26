const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require("./routers/routes/signUpRoute")
const loginRoute = require("./routers/routes/loginRoute")
const foodRoute = require("./routers/routes/foodRoute")
const dietRoute = require("./routers/routes/dietRoute")
const FoodDiadRoute = require ("./routers/routes/FoodDiadRoute")
const vegetRoute = require("./routers/routes/vegetRoute")
const userRoute = require("./routers/routes/userRoute")

app.use(signUpRoute)
app.use(loginRoute)
app.use(foodRoute)
app.use(dietRoute)
app.use(FoodDiadRoute)
app.use(vegetRoute)
app.use(userRoute)

  // ^ جبناهم عشان نستخدمهم بالسيرفر
app.get("/", (req, res) => {
    res.status(200).json("welcome customers");
  });
   
  // to create class in javaScript we use ....... keyword
  // to remove an element from the beginning of an array we use ..... function
////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})


