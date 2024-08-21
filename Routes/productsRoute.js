const express = require("express");
const router = express.Router();
const product = require("../Controllers/productsCotroller");

router.post("/", product.addProduct);
router.get("/", product.getProducts);
router.patch("/updateProduct/:productId", product.updateProduct);
router.patch("/updateProductImage/:productId", product.updatedProductImage);
router.delete("/deleteProduct/:productId", product.deleteProduct);

module.exports = router;
