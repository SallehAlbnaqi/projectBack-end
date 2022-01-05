const mongoose = require("mongoose");

const dietModel = new mongoose.Schema({
  name: { type: String },
  description:  {type: String } ,
  img: {type:String},
  video:{type: String },
  user:{type: mongoose.Types.ObjectId, ref:"userModel"}
}); 

module.exports = mongoose.model("dietModel", dietModel);
