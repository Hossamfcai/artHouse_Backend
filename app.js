const express = require("express");
const connectDB = require("./Config/dbConfig");
const departmentRoute = require("./Routes/deparmentsRoute");
const productRoute = require("./Routes/productsRoute");
const aboutRoute = require("./Routes/aboutRoute");
const branchesRoute = require("./Routes/branchesRoute");
const homeImagesRoute = require("./Routes/homeImagesRoute");
const port = 3000;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("./images"));
connectDB();

app.use("/departments", departmentRoute);
app.use("/products", productRoute);
app.use("/about", aboutRoute);
app.use("/branch", branchesRoute);
app.use("/homeImages", homeImagesRoute);
app.listen(port, () => {
  console.log("server started at port 3000");
});
