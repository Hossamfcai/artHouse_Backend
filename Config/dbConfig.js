const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((connection) => {
      console.log(`Database connected: ${connection.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database Error : ${err}`);
      process.exit(1);
    });
};

module.exports = connectDB;
