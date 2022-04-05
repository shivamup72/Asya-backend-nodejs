const db = require("../models");
const Users = require("../models/Users");
const Customers = db.customer;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const { address } = req.body;
  console.log("first,", address);
  if (!address.address_1 && !address.coordinate_1) {
    res.status(400).send({
      message: "Address can not be empty!",
    });
  } else {
    let ff = await Customers.findOne({
      where: { user_id: address.user_id },
    });

    if (!ff || ff === null || ff === undefined) {
      const Address = {
        address_1: address.address_1,
        address_2: address.address_2,
        address_3: address.address_3,
        coordinate_1: address.coordinate_1,
        coordinate_2: address.coordinate_2,
        coordinate_3: address.coordinate_3,
        user_id: address.user_id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      Customers.create(Address)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Adress.",
          });
        });
    } else {
      Customers.update(
        {
          address_1:
            address.address_1 === null ? ff.address_1 : address.address_1,
          address_2:
            address.address_2 === null ? ff.address_2 : address.address_2,
          address_3:
            address.address_3 === null ? ff.address_2 : address.address_3,
          coordinate_1:
            address.coordinate_1 === null
              ? ff.coordinate_1
              : address.coordinate_1,
          coordinate_2:
            address.coordinate_2 === null
              ? ff.coordinate_2
              : address.coordinate_2,
          coordinate_3:
            ff.coordinate_3 === null ? ff.coordinate_3 : address.coordinate_3,
          user_id: address.user_id === null ? ff.user_id : address.user_id,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        { where: { user_id: ff.user_id } }
      )
        .then((result) =>
          res.status(200).send({
            status: true,
            message: "address update Successfully",
          })
        )
        .catch((err) =>
          res.status(500).send({
            status: false,
            message: err || "address Update Unsuccessful",
          })
        );
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
    .then((data) => {
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
              data: req.body,
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
    .then((data) => {
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
              data: req.body,
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

exports.updatethirdAddress = async (req, res) => {
  const { user_id, address_3, coordinate_3 } = req.body;
  console.log("req.body", user_id, address_2, coordinate_2);
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  await Customers.findOne({ where: { user_id: user_id } })
    .then((data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO Customer Adress with this profile",
        });
      } else {
        Customers.update(
          { address_3: address_3, coordinate_3: coordinate_3 },
          { where: { user_id: user_id } }
        )
          .then((result) =>
            res.status(200).send({
              status: true,
              data: req.body,
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