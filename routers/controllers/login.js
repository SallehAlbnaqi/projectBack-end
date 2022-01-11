const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");
const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    //    الفايندون ترجع اوبجكت واحد
    console.log(user, "user");
    // يبحث عن الايميل بقاعدة البيانات
    if (user) {
      const lok = await bcrypt.compare(password, user.password);
      // ^ سوينا مقارنة على الباس االلي يدخلة اليوزر بالاوبجيكت

      if (lok === true) {
        const payload = {
          userId: user._id,
          userName: user.name,
          admin: user.admin,
        };
        //  ^ عرفنا البيلود وحطينا فيه الاوبجيكت عشان نستفيد منها بالفرونت اند
        const token = jwt.sign(payload, "ACC");
        //  البايلود جزء من التوكن هي طريقة تشفير

        res.status(200).json({ token, payload });
        // ^ بعثنا التوكين ك اوبجيكت
      } else {
        res.status(403).json("wrong passWord");
        // ^ اذا اليوزر دخل رمز خطأ  على حسب الشرط
      }
    } else {
      res.status(404).json("wrong email");
      // ^ اذا الايميل غير موجود بقاعدة البيانات يعطينا null
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { login };
