const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const crypto = require('crypto')
const saltRounds = 10;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  let dd = await Users.findOne({ where: { email: req.body.email } });
  console.log("dd", dd);
  if (dd) {
    res.status(400).send({
      message: "Allready SIGNUP WITH THIS EMAIL ID",
      status: false,
    });
  } else {
    console.log("first,", req.body);
    // const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const encryptedPassword = crypto.createHash('sha1').update(password).digest('hex')
    if (
      !req.body.name &&
      !req.body.email &&
      //!req.body.phone &&
      !req.body.password
    ) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Create a Tutorial
    const users = {
      name: req.body.first + " " + req.body.last,
      email: req.body.email,
     // phone: req.body.phone,
      password: encryptedPassword,
      // status: req.body.status,
      // thumbnail: req.body.thumbnail,
      // role_id: req.body.role_id,
      // createdAt:Date.now(),
      // updatedAt:Date.now()
    };
    // Save Tutorial in the database
    Users.create(users)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the testing.",
        });
      });
  }
};

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Users.findAll()
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
