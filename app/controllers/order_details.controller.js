const db = require("../models");
const Food_menus = db.Food_menus;
const Addons = db.Addons;
const Variant_options = db.Variant_options;
const Restaurants = db.restaurants;
const Order_details = db.Order_details;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const {
    orderdetails,
  } = req.body;
  console.log("first,", orderdetails, req.body);

  if (
    !orderdetails &&
    orderdetails[0] === undefined
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  Order_details.bulkCreate(orderdetails)
    .then((data) => {
      res.status(200).send({
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the cart.",
      });
    });
};

// /////
exports.findAll = (req, res) => {
  Order_details.findAll({
    include: [
      {
        model: Food_menus,
        as: "menu",
        required: false,
      },
      {
        model: Restaurants,
        as: "restaurants",
        required: false,
      },
      {
        model: Variant_options,
        as: "variant",
        required: false,
      },
      {
        model: Addons,
        as: "addon",
        required: false,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cart.",
      });
    });
};

exports.findOne = (req, res) => {
  
  Order_details.findAll({
    where: { order_code: req.params.code },
    include: [
      {
        model: Food_menus,
        as: "menu",
        required: false,
      },
      {
        model: Restaurants,
        as: "restaurants",
        required: false,
      },
      {
        model: Variant_options,
        as: "variant",
        required: false,
      },
      {
        model: Addons,
        as: "addon",
        required: false,
      },
    ],
  })
    .then((data) => {
      if (!data || data === null) {
        res.status(400).send({
          status: false,
          message: "NO cart found",
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

// exports.removeOne = (req, res) => {
//   const {customer_id , menu_id }= req.body;
//   Cart.destroy({ where: { customer_id:customer_id , menu_id:menu_id  }})
//     .then((data) => {
//       if (!data || data === null) {
//         res.status(400).send({
//           status: false,
//           message: "NO cart found",
//         });
//       } else {
//         res.send({
//           status: true,
//           data: data,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };

