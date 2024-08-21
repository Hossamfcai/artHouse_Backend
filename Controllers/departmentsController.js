const departmentMdodel = require("../Model/departmentModel");
const productsModel = require("../Model/productModel");
const catchAsync = require("express-async-handler");

//create a department
exports.createDepartment = async (req, res) => {
  try {
    const department = await departmentMdodel.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

//Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await departmentMdodel.find();
    res.status(201).json(departments);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

//Delete department and all products of this department
exports.deleteDepartment = async (req, res) => {
  try {
    const deletedDepartment = await departmentMdodel.findByIdAndDelete(
      req.params.departmentId
    );
    await productsModel.deleteMany({
      department: req.params.departmentId,
    });
    res.status(201).json({
      msg: "Department has been deleted successfully",
      deletedDepartment,
    });
  } catch (err) {
    res.status(400).send({ msg: `No department of this id:${req.params.id}` });
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
