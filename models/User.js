const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  country: String,
  photo: String,
  name: String,
  surname: String,
  birth_Year: Number
});

module.exports = User;
