const FoodDiabeticsModel = require("../../db/models/FoodDiabeticsModel");

const getFoDiab = async (req,res) => {
    try{

 const Diad = await FoodDiabeticsModel.find({});
 res.status(200).json(Diad);
} catch (err){
    res.send(err)
}
}


const postFoDiab = async (req, res) => {
const { newName, newDescription, newImg } = req.body;
const user = req.token.userId;
try {
    const newDiab = new FoodDiabeticsModel
    ({name: newName, description: newDescription, img:newImg, user });
    const saveDiab = await newDiab.save();
    res.status(201).json(saveDiab)
} catch (err){
    res.send("err");
}
} 

const deleteFoDiab = async (req, res) => {
    const id = req.params.id;
    // const user = req.token.userId;
    try{
    const deleDiad = await FoodDiabeticsModel.findOneAndDelete({_id:id, user:user });
      res.status(201).json(deleDiad);
    } catch (err){
        res.send(err)
    }
}




module.exports = { getFoDiab,  postFoDiab,  deleteFoDiab }