const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yourDBFood").then(
              // ^ أنشأنا  قاعدة بيانات وسميناها فود
  () => { 
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);