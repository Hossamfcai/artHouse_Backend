const mongoose = require("mongoose");
const branchesSchema = mongoose.Schema({
  branchName: {
    type: String,
    require: true,
  },
  branchImg: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("branches", branchesSchema);
