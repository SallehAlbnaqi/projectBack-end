const express = require("express");
const vegetRoute = express.Router();
const { authentication } = require("../middlewares/authentication");
const { getVeget , postVeget , deleteVegent, putVeget} = require("../controllers/veget");

vegetRoute.get("/veget", authentication, getVeget);
vegetRoute.post("/veget", authentication, postVeget);
vegetRoute.delete("/veget/:id", authentication, deleteVegent);
vegetRoute.put("/vegetUpd/:id", authentication, putVeget)


module.exports = vegetRoute;
