const express = require("express");
const router = express.Router();
const product = require("../Controllers/productsCotroller");
const auth = require("../middleware/auth");
require("dotenv").config();
router.post(
  "/",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  product.addProduct
);
router.get("/", product.getProducts);
router.patch(
  "/updateProduct/:productId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  product.updateProduct
);
router.patch(
  "/updateProductImage/:productId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  product.updatedProductImage
);
router.delete(
  "/deleteProduct/:productId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  product.deleteProduct
);

module.exports = router;
