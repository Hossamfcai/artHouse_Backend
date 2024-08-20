const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
        },
        message: "invalid email format",
      },
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userType",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
