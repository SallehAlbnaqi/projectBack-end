const express = require ("express")
const signUpRoute = express.Router();

const { userAdd } = require('../controllers/signUp')
signUpRoute.post("/signUp",userAdd);



module.exports = signUpRoute;