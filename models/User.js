const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  cityUser: String,
  photoUser: String,
  name: String,
  surname: String,
  birth_Year: Number
});

module.exports = User;
