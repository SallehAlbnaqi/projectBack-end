const express = require("express");
// const { attachment } = require("express/lib/response");
const foodRoute = express.Router();
const {authentication} = require("../middlewares/authentication")
const { getFood, postFood, deleteFood } = require("../controllers/Food");

foodRoute.get("/Food", authentication ,getFood);
foodRoute.post("/Food", authentication,postFood);
foodRoute.delete("/Food/:id", authentication,deleteFood);



module.exports = foodRoute;

