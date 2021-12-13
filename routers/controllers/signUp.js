const bcrypt = require ("bcrypt")
const userModel = require ("../../db/models/userModel")

const userAdd = async (req,res)=>{
    let { name, email, password}= req.body;
    try {
        password = await bcrypt.hash(password,10);
        const newUs = new userModel ({ name, email, password });
        const response = await newUs.save();
        res.status(201).json(response);

    }  catch (err){
        res.send(err)
    }
}

module.exports = { userAdd }