const express = require("express");
const router = express.Router();

const homeImages = require("../Controllers/homeImagesController");
const auth = require("../middleware/auth");
require("dotenv").config();
router.post(
  "/",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  homeImages.createImages
);
router.get("/", homeImages.getImages);
router.delete(
  "/deleteImage/:imageId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  homeImages.deleteImage
);

module.exports = router;
