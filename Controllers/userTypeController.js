const userTypeModel = require("../Model/userTypeModel");

exports.createUserType = async (req, res) => {
  try {
    const userType = await userTypeModel.create(req.body);
    res.status(201).json(userType);
  } catch (err) {
    res.status(401).send({ err: err.message });
  }
};
