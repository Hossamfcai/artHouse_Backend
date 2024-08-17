const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "departments",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", productsSchema);
