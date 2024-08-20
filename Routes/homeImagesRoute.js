const express = require("express");
const router = express.Router();

const homeImages = require("../Controllers/homeImagesController");

router.post("/", homeImages.createImages);
router.get("/", homeImages.getImages);
router.delete("/deleteImage/:imageId", homeImages.deleteImage);

module.exports = router;
