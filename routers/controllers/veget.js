const vegetModel = require("../../db/models/vegetModel");


const getVeget =  async (req,res) =>{
    try{
    const veget = await vegetModel.find({});
    res.status(200).json(veget)
    } catch (err){
        res.send(err);
    }
}

const getVegetFood = async (req,res)=>{
   const id = req.params.id;
   const user = req.token.userId;
   try{
      const vegetFood = await vegetModel.findOne({_id: id}).populate("user");
      res.status(200).json(vegetFood);
   } catch (err){
       res.send(err)
   }
}


const postVeget = async (req,res) =>{
let { newName, newDescription, newImg, newVideo } = req.body;
newVideo =  "https://www.youtube.com/embed/"+newVideo

const user = req.token.userId
try{
    const newVeget = new vegetModel({name: newName, description: newDescription, img: newImg, video: newVideo  });
    const savedVeget = await newVeget.save();
    res.status(201).json(savedVeget);
}catch (error) {
    res.send(error);
}

}


const putVeget = async (req,res)=>{
  const id = req.params.id;
  let {name, discription} = req.body;
  try{
    const vegetUpb = await vegetModel.findOneAndUpdate({_id: id, name: name, discription: discription});
    res.status(201).json(vegetUpb);

  } catch (err){
     res.send(err) 
  } 
}


const deleteVegent = async (req,res)=>{
 const id = req.params.id;
// const user = req.token.userId
try{
   const delet = await vegetModel.findOneAndDelete({_id:id, user:user});
   res.status(201).json(delet);
} catch (err){
    res.send(err)
}
}



module.exports = { getVeget , getVegetFood, postVeget , deleteVegent, putVeget };