const express = require("express");
const loginRoute = express.Router();

const { login } = require("../controllers/Login");

loginRoute.post("/login", login);

module.exports = loginRoute;
