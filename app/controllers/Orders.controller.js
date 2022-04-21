const db = require("../models");
// const Cart = db.Cart;
const Orders = db.Orders;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const {
    // code,
    // menu_id,
    // customer_id,
    // customer_address_id,
    // driver_id,
    // total_menu_price,
    // total_delivery_charge,
    // total_vat_amount,
    // grand_total
    order
  } = req.body;
  console.log("first,", req.body);

  if (
    // !code &&
    // ! menu_id&&
    // !customer_id &&
    // !driver_id&&
    // !customer_address_id &&
    // !total_menu_price &&
    // !total_delivery_charge &&
    // !total_vat_amount &&
    // !grand_total

    !order&&
    order[0] === undefined
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

    // Create a Tutorial
    // const cart = {
    //   customer_id: customer_id,
    //   menu_id: menu_id,
    //   restaurant_id: restaurant_id,
    //   servings: servings,
    //   quantity: quantity,
    //   price: pricing,
    //   note: note,
    //   addons: addons,
    //   variant_id: variant_id,
    // };
    // Save Tutorial in the database
    Orders.create(order)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cart.",
        });
      });

};

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Orders.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cart.",
      });
    });
};

// exports.findOne = (req, res) => {
//     Orders.findAll({ where: { customer_id: req.params.id }})
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