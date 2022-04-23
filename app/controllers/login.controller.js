const db = require("../models");
const Login = db.users;
const Op = db.Sequelize.Op;
const crypto = require("crypto");
const saltRounds = 10;
// Create and Save a new Tutorial
exports.login = async (req, res) => {
  // Validate request
  let encryptedPassword;
  if (!req.body.email && !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
      status: false,
    });
    return;
  }

  // console.log("encryptedPassword", encryptedPassword);
  let data = await Login.findOne({
    where: { email: req.body.email },
  });

  console.log("dd", data);
  if (data) {
    encryptedPassword = crypto
      .createHash("sha1")
      .update(req.body.password)
      .digest("hex");
    console.log('first',encryptedPassword,data.dataValues.password,'check',encryptedPassword === data.dataValues.password)

    if (encryptedPassword === data.dataValues.password) {
      res.status(200).send({
        message: "Login Succeed!",
        status: true,
        data: {
          id: data.dataValues.id,
          first:
            data.dataValues.name.split(" ")[0] === null
              ? null
              : data.dataValues.name.split(" ")[0],
          last:
            data.dataValues.name.split(" ")[1] === null
              ? null
              : data.dataValues.name.split(" ")[1],
          phone: data.dataValues.phone,
          email: data.dataValues.email,
          thumbnail: data.dataValues.thumbnail,
        },
      });
    } else {
      res.status(400).send({
        message: "Please Enter Valid Password !",
        status: false,
      });
    }
  } else {
    res.status(400).send({
      message: "Please Enter Valid EmailId !",
      status: false,
    });
  }
};

/////
exports.loginProfile = (req, res) => {
  console.log("req.params.id", req.params.id);
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Login.findOne({
    where: { id: req.params.id },
  })
    .then((data) => {
      res.send({
        id: data.dataValues.id,
        first:
          data.dataValues.name.split(" ")[0] === null
            ? null
            : data.dataValues.name.split(" ")[0],
        last:
          data.dataValues.name.split(" ")[1] === null
            ? null
            : data.dataValues.name.split(" ")[1],
        phone: data.dataValues.phone,
        email: data.dataValues.email,
        thumbnail: data.dataValues.thumbnail,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
