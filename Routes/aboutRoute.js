const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const aboutUs = require("../Controllers/aboutController");
require("dotenv").config();

router.post("/", aboutUs.createAbout);
router.get("/", aboutUs.getAbout);
// router.route("/").get(getAbout).post(createAbout);
router.patch(
  "/updateHeaderImage",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  aboutUs.updateHeaderImage
);
router.patch(
  "/updatedFirstImage",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  aboutUs.updatedFirstImage
);
router.patch(
  "/updateSecondImage",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  aboutUs.updateSecondImage
);
router.patch(
  "/updateInfoOfAbout",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  aboutUs.updateInfoOfAbout
);

module.exports = router;
