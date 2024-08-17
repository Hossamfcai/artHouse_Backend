const express = require("express");
const router = express.Router();
const {
  addHeadrImage,
  createAbout,
  getAbout,
  updateHeaderImage,
  updateSecondImage,
  updatedFirstImage,
} = require("../Controllers/aboutController");

router.post("/", createAbout);
router.get("/", getAbout);
router.patch("/updateHeaderImage", updateHeaderImage);
router.patch("/updatedFirstImage", updatedFirstImage);
router.patch("/updateSecondImage", updateSecondImage);

module.exports = router;
