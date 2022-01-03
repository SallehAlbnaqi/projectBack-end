const userModel = require("../../db/models/userModel");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  const user = req.token.userId;
  try {
    const getFo = await userModel.findOne({ _id: user });
    res.status(200).json(getFo);
  } catch (err) {
    res.send(err);
  }
};



const updetUF = async (req, res) => {
  let { name, img } = req.body;
  const user = req.token.userId;

  try {
    const upbetU = await userModel.findByIdAndUpdate(
      { _id: user },
      { name, img },
      { new: true }
    //   ^ نسوي تحديث لليوزر والباس 
    );
    res.status(200).json(upbetU);
  } catch (err) {
    res.send(err);
  }
};


const removUser = async (req, res) => {
    const user = req.token.userId;
    // ^ نمرر التوكن تبع اليوزر اذا سجل دخول
    try{
    const deleUser = await userModel.findByIdAndDelete({_id: user});
                                    //    ^ سونا حذف لليوزر عن طريق الايدي
    res.status(200).json(deleUser);
    } catch (err){
        res.send(err);
    }
};

module.exports = { getUser, updetUF, removUser };
