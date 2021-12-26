const mongoose = require("mongoose");

const foodModel = new mongoose.Schema({
  name: { type: String },
  description:  {type: String } ,
  img: {type:String},
  user:{type: mongoose.Types.ObjectId, ref:"userModel"}
});

module.exports = mongoose.model("foodModel", foodModel);
