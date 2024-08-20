const productsModel = require("../Model/productModel");
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
      const product = await productsModel.create(productData);
      res.status(201).json(product);
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await productsModel.find().populate("department");
    res.status(201).json(products);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    // const { title, price, department } = req.body;
    // const product = await productsModel.findById(req.params.productId);
    // const updatedData = {
    //   filename: product.filename,
    //   title: title ? title : product.title,
    //   price: price ? price : product.price,
    //   department: department ? department : product.department,
    // };
    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(401).json({
      err: `No product for this id ${req.params.productId}`,
      updated: "failed",
    });
  }
};

exports.updatedProductImage = async (req, res) => {
  try {
    multerConfig.single("filename")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const Img = {
        filename: `images/${req.file.filename}`,
      };
      const updateProductImage = await productsModel.findByIdAndUpdate(
        req.params.productId,
        Img,
        { new: true }
      );
      res.status(201).json(updateProductImage);
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productsModel.findByIdAndDelete(
      req.params.productId
    );
    res
      .status(201)
      .json({ msg: "Product has been deleted successfully", deletedProduct });
  } catch (err) {
    res.status(400).send({
      msg: err.message,
      reason: `No product for this id ${req.params.productId}`,
    });
  }
};
