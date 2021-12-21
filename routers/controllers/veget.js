const vegetModel = require("../../db/models/vegetModel");


const getVeget =  async (req,res) =>{
    try{
    const veget = await vegetModel.find({});
    res.status(201).json(veget)
    } catch (err){
        res.send(err);
    }
}


const postVeget = async (req,res) =>{
const { newName, newDescription, newImg } = req.body;
const user = req.token.userId
try{
    const newVeget = new vegetModel
    ({name: newName, description: newDescription, img: newImg });
    const savedVeget = await newVeget.save();
    res.status(201).json(savedVeget);
}catch (error) {
    res.send(error);
}

}

const deleteVegent = async (req,res) =>{
    const id = req.params.id;
    const user = req.token.userId;
    try{
    const deleVeget = await vegetModel.findOneAndDelete({_id:id});
    res.status(200).json(deleVeget);
    }catch (err){
    res.send(err)
    }

}

module.exports = { getVeget , postVeget , deleteVegent };