const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());





app.get("/", (req, res) => {
    res.status(200).json("welcome customers");
  });
  



////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
