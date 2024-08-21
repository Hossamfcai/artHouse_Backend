const express = require("express");
const router = express.Router();
const aboutUs = require("../Controllers/aboutController");

router.post("/", aboutUs.createAbout);
router.get("/", aboutUs.getAbout);
// router.route("/").get(getAbout).post(createAbout);
router.patch("/updateHeaderImage", aboutUs.updateHeaderImage);
router.patch("/updatedFirstImage", aboutUs.updatedFirstImage);
router.patch("/updateSecondImage", aboutUs.updateSecondImage);
router.patch("/updateInfoOfAbout", aboutUs.updateInfoOfAbout);

module.exports = router;
