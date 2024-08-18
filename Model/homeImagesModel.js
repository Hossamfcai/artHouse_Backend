const mongoose = require("mongoose");
const homeImagesSchema = mongoose.Schema({
  images: {
    type: [String],
  },
});
module.exports = mongoose.model("homeImages", homeImagesSchema);
