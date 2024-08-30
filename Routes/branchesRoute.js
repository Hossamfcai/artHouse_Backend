const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const branch = require("../Controllers/branchesController");
require("dotenv").config();

router.post(
  "/",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  branch.createBranch
);
router.get("/", branch.getBranches);
router.patch(
  "/updateBranchImage/:branchId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  branch.updateBranchImage
);
router.patch(
  "/updateBranchName/:branchId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  branch.updateBranchName
);
router.delete(
  "/deleteBranch/:branchId",
  auth.authMiddleware,
  auth.allowedTo(process.env.ADMIN_ID, process.env.SUBADMIN_ID),
  branch.deleteBranch
);

module.exports = router;
