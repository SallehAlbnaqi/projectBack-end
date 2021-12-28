const express = require ("express")
const signUpRoute = express.Router();

const { userAdd, adminAdd } = require('../controllers/SignUp')
    //    ^ يكون نفس اسم الفانكشن اللي بالساين اب بالكونترولر
signUpRoute.post("/signUp", userAdd);
signUpRoute.post("/admin", adminAdd)



module.exports = signUpRoute;

