const express = require("express");
const dietRoute = express.Router();
const {authentication} = require("../middlewares/authentication")
const { getDiet, postDiet, deleteDiet, putDiet } = require("../controllers/Diet");
    

dietRoute.get("/Diet", authentication ,getDiet);
dietRoute.post("/Diet", authentication,postDiet);
dietRoute.delete("/Diet/:id", authentication,deleteDiet);
dietRoute.put("/DietUpd/:id", authentication, putDiet);



module.exports = dietRoute;
