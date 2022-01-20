const mongoose = require("mongoose");
 console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL).then(
              // ^ أنشأنا  قاعدة بيانات وسميناها فود
  () => { 
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);