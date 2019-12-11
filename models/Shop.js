const mongoose = require("mongoose");

const Shop = mongoose.model("Shop", {
  title: String,
  description: String,
  city: String,
  photos: String,
  category: String,
  date: String,
  //   category: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Category"
  //   },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  averageRating: { type: Number, min: 0, max: 5 }
});

module.exports = Shop;
