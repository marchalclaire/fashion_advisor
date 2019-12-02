const express = require("express");
const router = express.Router();

//on importe des modèles :

const Shop = require("../models/Shop");

//Route 1 - CREATE *************************************************** :
router.get("/shop/create", async (req, res) => {
  console.log("ok route create shop");
  res.json("ok route shop");

  //   dans postman : http://localhost:4000/shop/create
});
module.exports = router;
