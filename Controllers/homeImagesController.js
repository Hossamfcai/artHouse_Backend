const homeImagesModel = require("../Model/homeImagesModel");
const multerConfig = require("../Config/multerConfig");

exports.createImages = async (req, res) => {
  try {
    multerConfig.array("image", 10)(req, res, async (err) => {
      if (err) {
        res.status(401).send(err);
      }
      const files = req.files;
      files.map((file) => {
        homeImagesModel.create({ image: `images/${file.filename}` });
      });
      const imagesData = await homeImagesModel.find();
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

exports.deleteImage = async (req, res) => {
  try {
    const deletedimage = await homeImagesModel.findByIdAndDelete(
      req.params.imageId
    );
    res
      .status(201)
      .json({ msg: "Image has been deleted successfully", deletedimage });
  } catch (err) {
    res.status(401).send({
      err: err.message,
      reason: `No image for this id ${req.params.imageId}`,
    });
  }
};
