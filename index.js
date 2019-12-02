const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(formidableMiddleware());

//on importe nos models : ************************************************
require("./models/Shop");
require("./models/User");
// require("./models/Review");

//on importe nos routes : ********************************************

const shopRoutes = require("./routes/shop");
app.use(shopRoutes);

const userRoutes = require("./routes/user");
app.use(userRoutes);

// const reviewRoutes = require("./routes/review");
// app.use(reviewRoutes);

// on se connecte à la base de données : *******************************
mongoose.connect("mongodb://localhost/fashionadvisor", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//on écoute les appels de l'extérieur sur le port 4000 : ********************************************
app.listen(4000, () => {
  console.log("Server Started");
});

// demarrer avec npx nodemon index.js (quand ds terminal Server Started, ne plus toucher)
