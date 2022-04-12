const db = require("../models");
const Addons = db.Addons;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Addons.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Addons.",
      });
    });
};

exports.findOne = (req, res) => {
    Addons.findAll({ where: { menu_id: req.params.id } })
    .then((data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO AddOn Found found",
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
          err.message || "Some error occurred while retrieving Add On.",
      });
    });
};
