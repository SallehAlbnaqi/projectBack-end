const express = require("express");
const vegetRoute = express.Router();
const { authentication } = require("../middlewares/authentication");
const { getVeget , postVeget , deleteVegent} = require("../controllers/veget");

vegetRoute.get("/veget", authentication, getVeget);
vegetRoute.post("/veget", authentication, postVeget);
vegetRoute.delete("/veget/:id", authentication, deleteVegent);



module.exports = vegetRoute;
