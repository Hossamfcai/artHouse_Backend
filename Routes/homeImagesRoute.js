const express = require("express");
const router = express.Router();

const {
  createImages,
  getImages,
} = require("../Controllers/homeImagesController");

router.post("/", createImages);
router.get("/", getImages);

module.exports = router;
