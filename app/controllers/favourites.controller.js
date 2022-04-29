const db = require("../models");
const Favourites = db.Favourites;
const Customer = db.customer;
const Food_menus = db.Food_menus;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  const { customer_id, menu_id } = req.body;
  if (!customer_id && !menu) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const fav = {
    customer_id: customer_id,
    menu_id: menu_id,
  };
  // Save Tutorial in the database
  Favourites.create(fav)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Favourites.",
      });
    });
};

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Favourites.findAll({
    include: [
      {
        model: Customer,
        as: "customer",
        required: false,
      },
      {
        model: Food_menus,
        as: "menu",
        required: false,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Food_categories.",
      });
    });
};

exports.findone = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Favourites.findAll({
    where: { customer_id: req.params.id },
    include: [
      {
        model: Customer,
        as: "customer",
        required: false,
      },
      {
        model: Food_menus,
        as: "menu",
        required: false,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Food_categories.",
      });
    });
};

exports.remove = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Favourites.destroy({
    where: { customer_id: req.params.id },})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while Deleting Favourites.",
      });
    });
};
