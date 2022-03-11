const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const multer = require("multer");
//const path = require("path/posix");
const fs = require("file-system");
const Os = require("os");

const db = require("./app/models");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
db.sequelize.sync();
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
require("./app/routes/users.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/cuisines.routes")(app);
app.use("/uploads", express.static("uploads"));
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    let pathimage = path.join(
      // "D:/Adee infotech/AKSHAY/developerzonehere-countrydelight-dfe810547ff2/src/",
      // "uploads"
      "./uploads",
      "images"
    );
    if (!fs.existsSync(pathimage)) {
      fs.mkdirSync(pathimage, { recursive: true });
    }
    cb(null, pathimage);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });
var multiple = upload.fields([{ name: "productimage" }, { name: "thumbnail" }]);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
var cuisinesImage = upload.fields([{ name: "cuisineimg" }]);
app.post("/cuisineimg", cuisinesImage, (req, res) => {
  console.log(req.file);
  res.send("cuisinesImage file upload succecsfuly"+req.file);
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
