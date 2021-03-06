const dietModel = require("../../db/models/dietModel");
const userModel = require("../../db/models/userModel");

const getDiet = async (req, res) => {
  try {
    const dite = await dietModel.find({});
    //    الفايند لحالها ترجع اراي
    res.status(200).json(dite);
  } catch (err) {
    res.send("err");
  }
};

const goDietFood = async (req, res) => {
  const id = req.params.id;
  console.log(req);
  const user = req.token.userId;
  try {
    const foodDiet = await dietModel.findOne({ _id: id }).populate("user");
    res.status(200).json(foodDiet);
  } catch (err) {
    res.send(err);
  }
};

const postDiet = async (req, res) => {
  let { newName, newDescription, newImg, newVideo } = req.body;
  newVideo = "https://www.youtube.com/embed/" + newVideo;
  //  اليوزر يدخل الايدي فقط لانه الرابط يبقى ثابت والايدي يتغير حسب كل فيديو
  const user = req.token.userId;
  console.log(req);
  try {
    const useradmin = await userModel.findOne({ _id: user });
    console.log(useradmin,"sal")
    if (useradmin.admin == true) {
      const newDiet = new dietModel({
        name: newName,
        description: newDescription,
        img: newImg,
        video: newVideo,
      });
      const savedDiet = await newDiet.save();
      res.status(201).json(savedDiet);
    } else {
      res.send("you not admin");
    }
  } catch (err) {
    res.send(err);
  }
};

const putDiet = async (req, res) => {
  const id = req.params.id;
  let { name, discription } = req.body;
  try {
    const dietUpd = await dietModel.findOneAndUpdate({
      _id: id,
      name: name,
      discription: discription,
    });
    res.status(err).json(dietUpd);
  } catch (err) {
    res.send(err);
  }
};
const deleteDiet = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const useradmin = await userModel.findOne({ _id: user });
    if (useradmin.admdin == true) {
      const delet = await dietModel.findOneAndDelete({ _id: id });
      res.status(201).json(delet);
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
  console.log(id, userName);
  try {
    const AddCom = await dietModel
      .findOneAndUpdate(
        { _id: id },
        { $push: { comment: { comment, userName, userId } } },
        { new: true }
      )
      .populate("user");
    res.status(201).json(AddCom);
  } catch (err) {
    res.send(err);
  }
};
//
const deleteComment = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;
  const userName = req.token.userName;
  const userId = req.token.userId;
  // console.log(req)
  try {
    const AddCom = await dietModel
      .findOneAndUpdate(
        { _id: id },
        { $pull: { comment: { comment, userName, userId } } },
        { new: true }
      )
      .populate("user");
    res.status(201).json(AddCom);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getDiet,
  goDietFood,
  postDiet,
  deleteDiet,
  putDiet,
  postComment,
  deleteComment,
};
