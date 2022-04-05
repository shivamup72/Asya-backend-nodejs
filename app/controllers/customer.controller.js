const db = require("../models");
const Users = require("../models/Users");
const Customers = db.customer;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const { address } = req.body;
  console.log("first,", address);
  if (!address[0]) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else {
    let check = [];
    let ff = await Customers.findOne({
      where: { user_id: 24 },
    });
    console.log("ff", check, address);
    if (!ff || ff === null || ff !== undefined) {
      Customers.bulkCreate(address)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the testing.",
          });
        });
    } else {
      check.push(ff.dataValues);
      const fdata = await address.filter((itemA) => {
        return check.find((itemB) => {
          return (
            // itemA.customer._id !== itemB.ProfileId._id &&
            itemA.address_1 !== itemB.address_1 ||
            itemA.address_2 !== itemB.address_2
          );
        });
      });
      console.log("first", fdata);
    }
  }
};
/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Customers.findAll()
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

exports.updatefirstAddress = async (req, res) => {
  const { user_id, address_1, coordinate_1 } = req.body;
  console.log("req.body", user_id, address_1, coordinate_1);
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  await Customers.findOne({ where: { user_id: user_id } })
    .then( (data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO Customer Adress with this profile",
        });
      } else {
         Customers.update(
          { address_1: address_1, coordinate_1: coordinate_1 },
          { where: { user_id: user_id } }
        )
          .then((result) =>
            res.status(200).send({
              status: true,
              data:req.body,
              message: "Address Update  Successfully",
            })
          )
          .catch((err) =>
            res.status(500).send({
              status: false,
              message: err || "Address Update  Unsuccessful",
            })
          );
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating address.",
      });
    });
};


exports.updatesecondAddress = async (req, res) => {
  const { user_id, address_2, coordinate_2 } = req.body;
  console.log("req.body", user_id, address_2, coordinate_2);
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  await Customers.findOne({ where: { user_id: user_id } })
    .then( (data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO Customer Adress with this profile",
        });
      } else {
         Customers.update(
          { address_2: address_2, coordinate_2: coordinate_2 },
          { where: { user_id: user_id } }
        )
          .then((result) =>
            res.status(200).send({
              status: true,
              data:req.body,
              message: "Address Update  Successfully",
            })
          )
          .catch((err) =>
            res.status(500).send({
              status: false,
              message: err || "Address Update  Unsuccessful",
            })
          );
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating address.",
      });
    });
};