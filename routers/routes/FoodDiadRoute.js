const express = require ("express");
const FoodDiabeticsRoute = express.Router();
const { authentication } = require("../middlewares/authentication");
const { getFoDiab , postFoDiab , deleteFoDiab } = require("../controllers/FodDiad");


FoodDiabeticsRoute.get("/FoDiab", authentication,getFoDiab);
FoodDiabeticsRoute.post("/FoDiab", authentication,postFoDiab);
FoodDiabeticsRoute.delete("/FoDiab/:id", authentication,deleteFoDiab);



module.exports = FoodDiabeticsRoute;