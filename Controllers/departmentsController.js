const departmentMdodel = require("../Model/departmentModel");
const catchAsync = require("express-async-handler");

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

// exports.createDepartment = catchAsync(async (req, res) => {
//   const department = await departmentMdodel.create(req.body);
//   res.status(201).json(department);
// });

// exports.getDepartments = async (req, res) => {
//   try {
//     const departments = await departmentMdodel.find();
//     res.status(201).json(departments);
//   } catch (err) {
//     res.status(401).send(err.message);
//   }
// };
