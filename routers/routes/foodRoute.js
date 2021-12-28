const express = require("express");
const foodRoute = express.Router();
const {authentication} = require("../middlewares/authentication")
const { getFood, postFood, deleteFood, putFood } = require("../controllers/Food");

foodRoute.get("/Food", authentication ,getFood);
foodRoute.post("/Food", authentication,postFood);
foodRoute.delete("/Food/:id", authentication,deleteFood);
foodRoute.put("/FoodUpb/:id", authentication, putFood)


module.exports = foodRoute;

