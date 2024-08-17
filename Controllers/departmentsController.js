const departmentMdodel = require("../Model/departmentModel");

exports.createDepartment = async (req, res) => {
  try {
    const department = await departmentMdodel.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const departments = await departmentMdodel.find();
    res.status(201).json(departments);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
