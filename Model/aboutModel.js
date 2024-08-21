const mongoose = require("mongoose");
const aboutSchema = mongoose.Schema({
  headerImg: {
    type: String,
  },
  firstImage: {
    type: String,
  },
  secondImage: {
    type: String,
  },
  history: {
    type: String,
    required: true,
  },
  growth: {
    type: String,
    required: true,
  },
  MissionAndVisionstatement: {
    type: String,
    required: true,
  },
  strategy: {
    type: String,
    required: true,
  },
  WhyArtHouse: {
    type: String,
    required: true,
  },
  OurScope: {
    type: String,
    required: true,
  },
  OurCommitment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("about", aboutSchema);
