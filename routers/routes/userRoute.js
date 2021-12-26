const express = require("express");
const userRoute = express.Router();




const { authentication } = require("../middlewares/authentication");
const { getUser, updetUF, removUser } = require("../controllers/user");

userRoute.get("/user", authentication, getUser);
userRoute.put("/updetUser", authentication, updetUF);
userRoute.delete("/deletUser/:id", authentication, removUser);





module.exports = userRoute;  
