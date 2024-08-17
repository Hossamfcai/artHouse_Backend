const produtsModel = require("../Model/productModel");
const departmentMdodel = require("../Model/departmentModel");
const multerConfig = require("../Config/multerConfig");

exports.addProduct = async (req, res) => {
  try {
    multerConfig.single("filename")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const productData = {
        filename: `images/${req.file.filename}`,
        title: req.body.title,
        price: req.body.price,
        department: req.body.department,
      };
      const product = await produtsModel.create(productData);
      res.status(201).json(product);
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await produtsModel.find().populate("department");
    res.status(201).json(products);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
