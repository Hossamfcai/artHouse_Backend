const branchesModel = require("../Model/branchesModel");
const multerConfig = require("../Config/multerConfig");

exports.createBranch = async (req, res) => {
  try {
    multerConfig.single("branchImg")(req, res, async (err) => {
      if (err) {
        res.status(401).send(err);
      }
      const branchData = {
        branchName: req.body.branchName,
        branchImg: `images/${req.file.filename}`,
      };
      const branch = await branchesModel.create(branchData);
      res.status(201).json(branch);
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.getBranches = async (req, res) => {
  try {
    const branches = await branchesModel.find();
    res.status(201).json(branches);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.updateBranchImage = async (req, res) => {
  try {
    multerConfig.single("branchImg")(req, res, async (err) => {
      if (err) {
        res.status(401).send(err.message);
      }
      const branchImg = { branchImg: `images/${req.file.filename}` };
      const updatedBranch = await branchesModel.findByIdAndUpdate(
        req.params.branchId,
        branchImg,
        { new: true }
      );
      res.status(201).json(updatedBranch);
    });
  } catch (err) {
    res.status(401).send({
      err: err.message,
      reason: `No Branch of this id : ${req.params.branchId}`,
    });
  }
};

exports.updateBranchName = async (req, res) => {
  try {
    const updatedbranch = await branchesModel.findByIdAndUpdate(
      req.params.branchId,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedbranch);
  } catch (err) {
    res.status(401).json({
      err: err.message,
      reason: `No Branch of this id : ${req.params.branchId}`,
    });
  }
};

exports.deleteBranch = async (req, res) => {
  try {
    const deletedBranch = await branchesModel.findByIdAndDelete(
      req.params.branchId
    );
    res
      .status(201)
      .json({ msg: "Branch has been deleted successfully", deletedBranch });
  } catch (err) {
    res.status(401).send({
      err: err.message,
      reason: `No branch for this id ${req.params.branchId}`,
    });
  }
};
