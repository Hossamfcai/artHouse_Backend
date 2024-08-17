const mongoose = require("mongoose");
const departmentSchema = mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("departments", departmentSchema);
