const FoodDiabeticsModel = require("../../db/models/FoodDiabeticsModel");
const userModel = require("../../db/models/userModel");

const getFoDiab = async (req, res) => {
  try {
    const Diad = await FoodDiabeticsModel.find({});
    res.status(200).json(Diad);
  } catch (err) {
    res.send(err);
  }
};

const goFood = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;

  console.log(goFood);
  try {
    const foodDied = await FoodDiabeticsModel.findOne({ _id: id }).populate(
      "user"
    );
    res.status(200).json(foodDied);
  } catch (err) {
    res.send(err);
  }
};

const postFoDiab = async (req, res) => {
  let { newName, newDescription, newImg, newVideo } = req.body;
  newVideo = "https://www.youtube.com/embed/" + newVideo;

  const user = req.token.userId;
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admin == true) {
      const newDiab = new FoodDiabeticsModel({
        name: newName,
        description: newDescription,
        img: newImg,
        video: newVideo,
      });
      const saveDiab = await newDiab.save();
      res.status(201).json(saveDiab);
    } else {
      res.send("you not admin");
    }
  } catch (err) {
    res.send("err");
  }
};

const putUpd = async (req, res) => {
  const id = req.params.id;
  let { name, discription } = req.body;
  try {
    const putUb = await FoodDiabeticsModel.findOneAndUpdate({
      _id: id,
      name: name,
      discription: discription,
    });
    res.status(201).json(putUb);
  } catch (err) {
    res.send(err);
  }
};

const deleteFoDiab = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin == true) {
      const deleDiad = await FoodDiabeticsModel.findOneAndDelete({
        _id: id,
      });
      res.status(201).json(deleDiad);
    } else {
      res.send("you are not admin");
    }
  } catch (err) {
    res.send(err);
  }
};

const postComment = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;
  const userName = req.token.userName;
  const userId = req.token.userId;
  try {
    const addComment = await FoodDiabeticsModel.findOneAndUpdate(
      { _id: id },
      { $push: { comment: { comment, userName, userId } } },
      { new: true }
    ).populate("user");
    res.status(200).json(addComment);
  } catch (err) {
    res.send(err);
  }
};

const deletComment = async (req,res)=>{
   const { comment } = req.body;
   const {id} = req.params;
   const userName = req.token.userName;
   const userId = req.token.userId;
console.log(id , comment);
console.log(userName , userId);

    try {

     const deletComments = await FoodDiabeticsModel.findOneAndUpdate(
        { _id: id },
        { $pull: { comment: { comment, userName, userId } } },
        { new: true }
      )
      res.status(201).json(deletComments);
      } catch (err){
     res.send({err}) 
      }
}

module.exports = {
  getFoDiab,
  postFoDiab,
  deleteFoDiab,
  putUpd,
  goFood,
  postComment,
  deletComment,
};
