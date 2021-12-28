const dietModel = require ("../../db/models/dietModel");



 const getDiet = async(req,res)=>{
     try{
    const dite = await dietModel.find({});
    //    الفايند لحالها ترجع اراي
    res.status(200).json(dite)
} catch (err){
    res.send("err");
}
 }



 const postDiet = async (req,res)=>{
     const {newName, newDescription, newImg} = req.body;
     const user  = req.token.userId

     try{
     const newDiet = new dietModel({ name:newName,description:newDescription,img:newImg , user});
      const savedDiet = await newDiet.save();
      res.status(201).json(savedDiet)
         
     } catch (err){
         res.send(err)
     }
 }


 const putDiet = async (req,res)=>{
  const id = req.params.id;
  let {name, discription} = req.body;
  try{
    const dietUpd = await dietModel.findOneAndUpdate({_id: id, name: name, discription: discription});
    res.status(err).json(dietUpd);
  } catch (err){
      res.send(err)
  }
 }
 const deleteDiet =  async (req,res)=>{
     const id = req.params.id;
     const user = req.token.userId
    try{
    const delet = await dietModel.findOneAndDelete({_id:id });
    res.status(201).json(delet)
    } catch (err){
       res.send(err) 
    }
}




module.exports = { getDiet, postDiet, deleteDiet, putDiet }