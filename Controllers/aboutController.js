const aboutModel = require("../Model/aboutModel");
const multerConfig = require("../Config/multerConfig");

//add header image
exports.addHeadrImage = async (req, res) => {
  try {
    multerConfig.single("headerImg")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const Img = {
        headerImg: `images/req.file.headerImg`,
      };
      const addImage = aboutModel.create(Img);
      res.status(201).json(addImage);
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createAbout = async (req, res) => {
  try {
    const data = await aboutModel.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(401).send(err.message);
  }
};
exports.getAbout = async (req, res) => {
  try {
    const data = await aboutModel.find();
    res.status(201).json(data);
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.updateHeaderImage = async (req, res) => {
  try {
    multerConfig.single("headerImg")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const Img = {
        headerImg: `images/${req.file.filename}`,
      };
      const updateHeader = await aboutModel.findByIdAndUpdate(
        "66c0f13c87a347345b505901",
        Img
      );
      res.status(201).json({
        status: "success",
        data: {
          updateHeader,
        },
      });
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.updatedFirstImage = async (req, res) => {
  try {
    multerConfig.single("firstImage")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const Img = {
        firstImage: `images/${req.file.filename}`,
      };
      const updateFirstImage = await aboutModel.findByIdAndUpdate(
        "66c0f13c87a347345b505901",
        Img
      );
      res.status(201).json(updateFirstImage);
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.updateSecondImage = async (req, res) => {
  try {
    multerConfig.single("secondImage")(req, res, async function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      const Img = {
        secondImage: `images/${req.file.filename}`,
      };
      const updateSecondImage = await aboutModel.findByIdAndUpdate(
        "66c0f13c87a347345b505901",
        Img
      );
      res.status(201).json(updateSecondImage);
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
};

exports.updateInfoOfAbout = async (req, res) => {
  try {
    const updatedData = await aboutModel.findByIdAndUpdate(
      "66c0f13c87a347345b505901",
      req.body,
      { new: true }
    );
    res.status(201).json({ msg: "Updated successfully", updatedData });
  } catch (err) {
    res.status(401).send(err);
  }
};
