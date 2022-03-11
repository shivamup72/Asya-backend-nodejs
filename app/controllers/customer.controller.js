const { sequelize } = require("../models");
const db = require("../models");
const Users = require("../models/Users");
const Customers = db.customer;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  //   if (dd) {
  //     res.status(400).send({
  //       message: "Allready SIGNUP WITH THIS EMAIL ID",
  //       status: false,
  //     });
  //   } else {
  console.log("first,", req.body);
  //const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  if (!req.body.houseno && !req.body.landmark && !req.body.city) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const customers = {
    address_1:
      req.body.houseno + " ," + req.body.landmark + " ," + req.body.city,
    coordinate_1: req.body.coordinate,
    user_id: req.body.user_id,
  };
  // Save Tutorial in the database
  Customers.create(customers)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the testing.",
      });
    });
  //}
};

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Customers.findAll({})
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

exports.findOne = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Customers.findOne({ where: { user_id: req.params.id } })
    .then((data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO Customer Adress with this profile",
        });
      } else {
        res.send({
          status: true,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
