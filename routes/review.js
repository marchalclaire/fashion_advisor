const express = require("express");
const router = express.Router();

//on importe des modèles :
const User = require("../models/User");
const Review = require("../models/Review");
const Shop = require("../models/Shop");

//on calcul l'average rating (note moyenne en fonction du rating donné lors du post du commentaire)

const calculateRating = shop => {
  // Si il n'y a pas d'avis, la note est égale à 0
  if (shop.reviews.length === 0) {
    return 0;
  }
  //reviews (nom donné dans le modèle shop qui est un tab, sur lequel on peut boucler)

  let rating = 0;
  //on boucle sur toutes les notes de reviews (rating et comment ?)
  for (let i = O; i < shop.reviews.length; i++) {
    rating = rating + shop.reviews[i].length;
  }
  // on fait la moyenne des notes: (rating = addition des notes) / ensemble des notes
  rating = rating / shop.reviews.length;
  rating = Number(rating.toFixed(1));

  return rating;
};

//Route 1 - CREATE *************************************************** :

router.post("/review/create", async (req, res) => {
  try {
    let shopId = req.fields.shop; //pas query ?
    let newRating = req.fields.rating;
    let newComment = req.fields.comment;
    let newUser = req.fields.user; //pas userId
    const shop = await Shop.findById(shopId).populate("reviews");

    if (shop) {
      // Garantir l'existance du tableau reviews
      if (shop.reviews === undefined) {
        shop.reviews = [];
      }

      const review = new Review({
        rating: newRating,
        comment: newComment,
        user: newUser
      });

      await review.save();

      // Ajoute l'avis dans le shop
      shop.reviews.push(review);

      // Mettre à jour la note moyenne
      const rating = calculateRating(shop);
      shop.averageRating = rating;

      // Sauvegarder les modifications du shop
      await shop.save();

      res.json(review);
    } else {
      res.status(400).json({ message: "Shop not found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
