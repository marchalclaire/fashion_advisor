const express = require("express");
const router = express.Router();

//on importe des modèles :
const User = require("../models/User");
const Review = require("../models/Review");
const Shop = require("../models/Shop");

//Route 1 - CREATE *************************************************** :
router.post("/user/create", async (req, res) => {
  try {
    let username = req.fields.username;
    let email = req.fields.email;
    let password = req.fields.password;
    let cityUser = req.fields.cityUser;
    let photoUser = req.fields.photoUser;
    let name = req.fields.name;
    let surname = req.fields.surname;

    const newUser = await User({
      username: username,
      email: email,
      password: password,
      cityUser: cityUser,
      photoUser: photoUser,
      name: name,
      surname: surname
    });

    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

//   dans postman : http://localhost:4000/user/create

//Route 2 - READ BY ID *************************************************** :
router.get("/user/read", async (req, res) => {
  try {
    let id = req.query.id; // localhost:4000/user/read?id=5de4eaf416de5d0944849a94

    const userToFind = await User.findById(id);
    return res.json(userToFind);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

// dans postman : http://localhost:4000/user/read?id=5de4eaf416de5d0944849a94

//Route 3 - UPDATE BY ID *************************************************** :
router.post("/user/update", async (req, res) => {
  try {
    let id = req.query.id;
    let username = req.fields.username;
    let email = req.fields.email;
    let password = req.fields.password;
    let cityUser = req.fields.city;
    let photoUser = req.fields.photoUser;
    let name = req.fields.name;
    let surname = req.fields.surname;

    let userToUpdate = await User.findById(id);

    if (username) {
      userToUpdate.username = username;
    }
    if (email) {
      userToUpdate.email = email;
    }
    if (password) {
      userToUpdate.password = password;
    }
    if (cityUser) {
      userToUpdate.cityUser = cityUser;
    }
    if (photoUser) {
      userToUpdate.photoUser = photoUser;
    }
    if (name) {
      userToUpdate.name = name;
    }
    if (surname) {
      userToUpdate.surname = surname;
    }

    await userToUpdate.save();
    return res.json(userToUpdate);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

// dans postman : http://localhost:4000/user/update?id=5de4eaf416de5d0944849a94

module.exports = router;
