const db = require("../models");
const Login = db.users;
const Op = db.Sequelize.Op;
const crypto = require('crypto')
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

  console.log("encryptedPassword", encryptedPassword);
  let dd = await Login.findOne({
    where: { email: req.body.email },
  });

  console.log("dd", dd);
  if (dd) {
   encryptedPassword = crypto.createHash('sha1').update(req.body.password).digest('hex')
   console.log('first',encryptedPassword,dd.dataValues.password,'check',encryptedPassword === dd.dataValues.password)
  
    if (encryptedPassword === dd.dataValues.password) {
      res.status(200).send({
        message: "Login Succeed!",
        status: true,
        data: dd,
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
