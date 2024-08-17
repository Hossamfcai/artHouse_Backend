const express = require("express");
const router = express.Router();
const { addProduct, getProducts } = require("../Controllers/productsCotroller");

router.post("/", addProduct);
router.get("/", getProducts);

module.exports = router;
