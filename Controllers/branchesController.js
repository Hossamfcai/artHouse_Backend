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
        branchImg: req.file.filename,
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
