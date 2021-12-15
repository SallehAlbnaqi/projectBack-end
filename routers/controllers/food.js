const foodModel = require ("../../db/models/foodModel")

const getFood = async (req,res)=>{
 try{
const foods = await foodModel.find({})
res.status(200).json(foods);
 } catch (error){
     res.send("error")
 }
}
const postFood = async (req,res)=>{
  let { newName, newDescription, newImg } = req.body;
  const user = req.token.userId
  console.log({ name:newName,description:newDescription,img:newImg , user});
  const newFood = new foodModel({ name:newName,description:newDescription,img:newImg , user})
    try{
        const saveFood = await newFood.save()
        // const foods = await foodModel.find({user: user}).populate("user");
        res.status(201).json(saveFood);
    } catch (error){
        res.send("error")
    }
}

const deleteFood = async (req,res)=>{
    const id = req.params.id;
    const user = req.token.userId
    try{
        const dele = await foodModel.findOneAndDelete({_id: id , user: user})
        res.status(201).json([dele, "delete"]);
    } catch (error){
        res.send("error")
    }
}

module.exports = { getFood, postFood, deleteFood }