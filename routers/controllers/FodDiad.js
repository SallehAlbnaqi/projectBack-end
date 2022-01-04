const FoodDiabeticsModel = require("../../db/models/FoodDiabeticsModel");

const getFoDiab = async (req,res) => {
    try{

 const Diad = await FoodDiabeticsModel.find({});
 res.status(200).json(Diad);
} catch (err){
    res.send(err)
}
}


const goFood = async (req, res)=>{
  const id = req.params.id;
  const user = req.token.userId;

 console.log(goFood);
  try{
     const foodDied = await FoodDiabeticsModel.findOne({_id: id}).populate("user");
     res.status(200).json(foodDied);

  } catch (err){
      res.send(err)
  }
}

const postFoDiab = async (req, res) => {
const { newName, newDescription, newImg } = req.body;
const user = req.token.userId;
try {
    const newDiab = new FoodDiabeticsModel
    ({name: newName, description: newDescription, img:newImg });
    const saveDiab = await newDiab.save();
    res.status(201).json(saveDiab)
} catch (err){
    res.send("err");
}
} 


const putUpd = async (req,res)=>{
const id = req.params.id
let {name, discription} = req.body;
try{
    const putUb = await FoodDiabeticsModel.findOneAndUpdate
    ({_id:id, name: name, discription: discription });
    res.status(201).json(putUb)
} catch (err){
    res.send(err)
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




module.exports = { getFoDiab,  postFoDiab,  deleteFoDiab, putUpd, goFood }