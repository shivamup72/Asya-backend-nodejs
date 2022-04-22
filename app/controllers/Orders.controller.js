const db = require("../models");
const Customer = db.customer;
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
    order,
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

    !order &&
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
  Orders.bulkCreate(order)
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
exports.findAll =async (req, res,next) => {
  
 // console.log('first',JSON.stringify(req.query),next)
  // const title = req.query.code;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log('first',Orders)
  Orders.findAll(
    {
      include: [{
        model: Customer,
       as: 'address',
       key: 'user_id',
       required: false,
      //  where: {user_id:31}
      },
    ]
    }
  )
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
  Orders.findAll({
    where: { customer_id: req.params.id },
    include: [
      {
        model: Customer,
        as: "address",
        required: true,
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
