const jwt = require("jsonwebtoken");
require("dotenv").config();
const asyncHandler = require("express-async-handler");
exports.authMiddleware = (req, res, next) => {
  const token = req.header("authorization")?.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ error: "access denied,token missing" });
  }
  try {
    const verified = jwt.verify(token, process.env.secret_key);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.allowedTo = (...roles) =>
  asyncHandler(async (req, res, next) => {
    console.log(req.user);
    if (!roles.includes(req.user.userType)) {
      res
        .status(401)
        .json({ error: "access denied,you are not allowed to access" });
    }
    next();
  });
