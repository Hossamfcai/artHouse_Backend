const homeImagesModel = require("../Model/homeImagesModel");
const multerConfig = require("../Config/multerConfig");

exports.createImages = async (req, res) => {
  try {
    multerConfig.array("images", 4)(req, res, async (err) => {
      if (err) {
        res.status(401).send(err);
      }
      const files = req.files;
      const images = [];
      files.map((file) => {
        images.push(file.filename);
      });
      const imagesData = await homeImagesModel.create({ images: images });
      res.status(201).json(imagesData);
    });
  } catch (err) {
    res.status(401).send(err);
  }
};
exports.getImages = async (req, res) => {
  try {
    const images = await homeImagesModel.find();
    res.status(201).json(images);
  } catch (err) {
    res.status(401).send(err);
  }
};
