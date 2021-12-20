const dietModel = require ("../../db/models/dietModel");



 const getDiet = async(req,res)=>{
     try{
    const dite = await dietModel.find({});
    res.status(200).json(dite)
} catch (err){
    res.send("err");
}
 }

 
 const postDiet = async (req,res)=>{
     const {newName, newDescription, newImg} = req.body;
     const user = req.token.userId;

     try{
     const newDiet = new dietModel({ name:newName,description:newDescription,img:newImg , user});
      const savedDiet = await newDiet.save();
      res.status(201).json(savedDiet)
         
     } catch (err){
         res.send(err)
     }
     l
 }

 const deleteDiet =  async (req,res)=>{
     const id = req.params.id;
     const user = req.token.userId
    const delet = await dietModel.findOneAndDelete({_id:id , user:user});
    res.status(201).json(delet)
}
module.exports = { getDiet , postDiet, deleteDiet }