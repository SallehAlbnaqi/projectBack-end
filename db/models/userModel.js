const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
                       // ^ مايصير تكرار لنفس الايميل 
  password: { type: String },
  img:{type:String},
  // Admin:{type: String}
});

module.exports = mongoose.model("userModel", userModel);
