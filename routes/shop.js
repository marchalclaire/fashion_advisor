const express = require("express");
const router = express.Router();

//on importe des modèles :

const Shop = require("../models/Shop");

//Route 1 - CREATE *************************************************** :
router.post("/shop/create", async (req, res) => {
  try {
    let title = req.fields.title;
    let description = req.fields.description;
    let city = req.fields.city;
    let photos = req.fields.photos;
    let category = req.fields.category;
    let averageRating = req.fields.averageRating;

    const newShop = new Shop({
      title: title,
      description: description,
      city: city,
      photos: photos,
      category: category,
      averageRating: averageRating
    });
    await newShop.save();
    return res.json(newShop);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

//   dans postman : http://localhost:4000/shop/create

//Route 2 - READ *************************************************** :
router.get("/shop/read", async (req, res) => {
  try {
    const shop = await Shop.find();
    res.json(shop);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

//   dans postman : http://localhost:4000/shop/read

//Route 3 - UPDATE ***************************************************OK :
router.post("/shop/update", async (req, res) => {
  try {
    let idToFind = req.query.id; //si on veut noter query, mettre dans postman localhost:4000/shop/update?id=5de4dfa5221f7007d1bdb604
    let title = req.fields.title;
    let description = req.fields.description;
    let city = req.fields.city;
    let photos = req.fields.photos;
    let category = req.fields.category;
    let averageRating = req.fields.averageRating;

    const updatedShop = await Shop.findOne({
      _id: idToFind
    });
    if (title) {
      updatedShop.title = title;
    }
    if (description) {
      updatedShop.description = description;
    }
    if (city) {
      updatedShop.city = city;
    }
    if (photos) {
      updatedShop.photos = photos;
    }
    if (category) {
      updatedShop.category = category;
    }

    await updatedShop.save();
    res.json(updatedShop);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

//   dans postman : http://localhost:4000/shop/update?id=5de4dfa5221f7007d1bdb604

module.exports = router;
