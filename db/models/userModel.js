const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
                       // ^ مايصير تكرار لنفس الايميل 
  password: { type: String },
  img:{type:String ,default:"https://img.lovepik.com/photo/50067/7934.jpg_wh860.jpg"},
  // Admin:{type: Boolean},
    
});

module.exports = mongoose.model("userModel", userModel);
