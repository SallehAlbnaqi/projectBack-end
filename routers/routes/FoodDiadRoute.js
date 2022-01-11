const express = require ("express");
const FoodDiabeticsRoute = express.Router();
const { authentication } = require("../middlewares/authentication");
const { getFoDiab, goFood, postFoDiab, deleteFoDiab, putUpd, postComment, deletComment } = require("../controllers/FodDiad");


FoodDiabeticsRoute.get("/FoDiab", authentication,getFoDiab);
FoodDiabeticsRoute.get("/get-food/:id", authentication, goFood )
FoodDiabeticsRoute.post("/FoDiab", authentication,postFoDiab);
FoodDiabeticsRoute.delete("/FoDiab/:id", authentication,deleteFoDiab);
FoodDiabeticsRoute.put("/FoDiadUbpd/:id", authentication, putUpd )

FoodDiabeticsRoute.post("/commentFodDibe/:id", authentication, postComment)
FoodDiabeticsRoute.put("/commentFodDibe/:id", authentication, deletComment)
module.exports = FoodDiabeticsRoute;