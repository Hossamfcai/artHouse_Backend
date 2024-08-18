const express = require("express");
const router = express.Router();
const {
  createBranch,
  getBranches,
} = require("../Controllers/branchesController");

router.post("/", createBranch);
router.get("/", getBranches);

module.exports = router;
