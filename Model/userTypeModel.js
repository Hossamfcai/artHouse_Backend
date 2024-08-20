const mongoose = require("mongoose");
const userTypeSchema = mongoose.Schema(
  {
    userType: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userType", userTypeSchema);
