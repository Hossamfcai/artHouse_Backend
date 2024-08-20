const adminModel = require("../Model/adminModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    const admin = await adminModel.create(req.body);
    res.status(201).json(admin);
  } catch (err) {
    res.status(401).send({ err: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await adminModel.findOne({ email: req.body.email });

    if (!user || user.password !== req.body.password) {
      res.status(401).send({ message: "Incorrect email or password" });
    }
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await adminModel.find().populate("userType");
    res.status(201).json(admins);
  } catch (err) {
    res.status(401).send({ err: err.message });
  }
};
