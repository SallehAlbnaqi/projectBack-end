const express = require ("express")
const signUpRoute = express.Router();

const { userAdd } = require('../controllers/SignUp')
    //    ^ يكون نفس اسم الفانكشن اللي بالساين اب بالكونترولر
signUpRoute.post("/signUp",userAdd);



module.exports = signUpRoute;

