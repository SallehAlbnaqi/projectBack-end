const mongoose = require("mongoose");

const FoodDiabeticsModel = new mongoose.Schema({
  name: { type: String },
  description:  {type: String } ,
  img: {type:String},
  video:{type: String },
  comment: {type: Array},

  user:{type: mongoose.Types.ObjectId, ref:"userModel"}
});

module.exports = mongoose.model("FoodDiabeticsModel", FoodDiabeticsModel);

