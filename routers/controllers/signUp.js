const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModel");
//   ^ استدعينا اليوزر موديل عشان نشتغل عليه

// توجد ثلاث مراحل لننشئ الساين اب
const userAdd = async (req, res) => {
  let { name, email, password, admin } = req.body;
  //  ^ المرحله الاولى
  try {
    password = await bcrypt.hash(password, 10);
    // ^ سوينا تشفير للرمز وقوته 10
    // التشفير اسويه قبل لا احفظ بالداتا بيس
    // ^^ المرحلة الثانية
    const newUs = new userModel({ name, email, password, admin: false });
    const response = await newUs.save();
    //  هنا حفظناهم بقاعدة البيانات عن طريق سيف
    // ^ المرحلة الثالثة
    res.status(201).json(response);
  } catch (err) {
    res.send(err);
  }
};

// const adminAdd = async (req, res) => {
//   let { name, email, password } = req.body;
//   //  ^ المرحله الاولى
//   try {
//     password = await bcrypt.hash(password, 10);
//     // ^ سوينا تشفير للرمز وقوته 10
//     // التشفير اسويه قبل لا احفظ بالداتا بيس
//     // ^^ المرحلة الثانية
//     const newUs = new userModel({ name, email, password, Admin: true });
//     const response = await newUs.save();
//     //  هنا حفظناهم بقاعدة البيانات عن طريق سيف
//     // ^ المرحلة الثالثة
//     res.status(201).json(response);
//   } catch (err) {
//     res.send(err);
//   }
// };

module.exports = { userAdd };
