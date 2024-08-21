const express = require("express");
const router = express.Router();
const branch = require("../Controllers/branchesController");

router.post("/", branch.createBranch);
router.get("/", branch.getBranches);
router.patch("/updateBranchImage/:branchId", branch.updateBranchImage);
router.patch("/updateBranchName/:branchId", branch.updateBranchName);
router.delete("/deleteBranch/:branchId", branch.deleteBranch);

module.exports = router;
