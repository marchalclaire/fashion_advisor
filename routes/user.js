const express = require("express");
const router = express.Router();

//on importe des modèles :
const User = require("../models/User");
const Shop = require("../models/Shop");

//Route 1 - CREATE *************************************************** :
router.get("/user/create", async (req, res) => {
  console.log("ok route create user");
  res.json("Ok Route User");

  //   dans postman : http://localhost:4000/user/create
});
module.exports = router;
