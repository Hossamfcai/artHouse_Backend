const adminModel = require("../Model/adminModel");
const bcrypt = require("bcrypt");
const createToken = require("../utils/createToken");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await adminModel.create({
      name,
      email,
      password: hashedPassword,
      userType,
    });
    res.status(201).json(admin);
  } catch (err) {
    res.status(401).send({ err: err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await adminModel.findOne({ email: req.body.email });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return next(
        res.status(401).send({ message: "Incorrect email or password" })
      );
    }
    delete user._doc.password;
    const token = createToken({ userId: user._id, userType: user.userType });

    res.status(201).json({ user, token });
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
