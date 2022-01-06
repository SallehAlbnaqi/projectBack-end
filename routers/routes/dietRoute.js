const express = require("express");
const dietRoute = express.Router();
const {authentication} = require("../middlewares/authentication")
const { getDiet, goDietFood, postComment, postDiet, deleteDiet, putDiet,deleteComment } = require("../controllers/Diet");
    

dietRoute.get("/Diet", authentication ,getDiet);
dietRoute.get("/getDiet/:id", authentication, goDietFood)
dietRoute.post("/Diet", authentication,postDiet);
dietRoute.delete("/Diet/:id", authentication,deleteDiet);
dietRoute.put("/DietUpd/:id", authentication, putDiet);

dietRoute.post("/AddComment/:id", authentication, postComment)
dietRoute.delete("/Comment/:id", authentication, deleteComment)




module.exports = dietRoute;
