const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (payLoad) => {
  return jwt.sign(
    { userId: payLoad.id, userType: payLoad.userType },
    process.env.secret_key,
    { expiresIn: process.env.JWT_EXPIRE_TIME }
  );
};

module.exports = createToken;
