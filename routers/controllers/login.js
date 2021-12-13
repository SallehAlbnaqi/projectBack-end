const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
const userModel = require ("../../db/models/userModel");
const login = async ( req,res)=>{
    let { email, password } = req.body;
    try{
    const user = await userModel.findOne({ email: email});
    if (user){
        const lok = await bcrypt.compare(password, user.password);
        if ( lok === true){
            const payload = { userId: user._id, userName: user.name };
            const token = jwt.sign(payload,"ACC");
            res.status(200).json({token});
        } else{
            res.status(403).json("wrong passWord")
        }
    } else {
    res.status(404).json("wrong email")
    }

    } catch (err) {
     res.send(err)
    }
} 

module.exports = { login }