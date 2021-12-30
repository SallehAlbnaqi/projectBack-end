const express = require("express");
const dietRoute = express.Router();
const {authentication} = require("../middlewares/authentication")
const { getDiet, goDietFood, postDiet, deleteDiet, putDiet } = require("../controllers/Diet");
    

dietRoute.get("/Diet", authentication ,getDiet);
dietRoute.get("/getDiet/:id", authentication, goDietFood)
dietRoute.post("/Diet", authentication,postDiet);
dietRoute.delete("/Diet/:id", authentication,deleteDiet);
dietRoute.put("/DietUpd/:id", authentication, putDiet);



module.exports = dietRoute;
