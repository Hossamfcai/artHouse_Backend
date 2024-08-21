const mongoose = require("mongoose");
const homeImagesSchema = mongoose.Schema({
  image: {
    type: String,
  },
});
module.exports = mongoose.model("homeImages", homeImagesSchema);
