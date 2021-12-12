const express = require("express");
const foodModel = express.Router();
const {authentication} = require("../middleware/authentication")
const { getFood, postFood, deleteFood } = require("../controllers/food");

foodModel.get("/Food/:id",authentication,getFood);
foodModel.post("/Food/:id" ,authentication,postFood);
foodModel.delete("/Food/:id",authentication ,deleteFood);


module.exports = foodModel;
