const db = require("../models");
const Reviews = db.Reviews;
// const Food_menus = db.Food_menus;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const { order_code, menu_id, customer_id, rating, review, restaurant_id } =
    req.body;
  console.log("first,", req.body);

  if (
    !order_code &&
    !menu_id &&
    !customer_id &&
    !rating &&
    !review &&
    !restaurant_id
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
//   let check = await Cart.findOne({
//     where: { customer_id: customer_id, menu_id: menu_id },
//   });
//   console.log("first", check);
//   if (check !== null) {
//     Cart.update(
//       {
//         order_code : order_code,
//     menu_id :menu_id ,
//     customer_id : customer_id,
//     rating :rating ,
//     review : review,
//     restaurant_id: restaurant_id,
//     timestamp :timestamp
//       },
//       { where: { customer_id: customer_id, menu_id: menu_id } }
//     )
//       .then((result) =>
//         res.status(200).send({
//           status: true,
//           message: "cart update  Successfully",
//         })
//       )
//       .catch((err) =>
//         res.status(500).send({
//           status: false,
//           message: err + "cart update   UnSuccessfully",
//         })
//       );
//   } else {
    // Create a Tutorial
    const reviews = {
        order_code : order_code,
        menu_id :menu_id ,
        customer_id : customer_id,
        rating :rating ,
        review : review,
        restaurant_id: restaurant_id,
        timestamp :Date.now()
    };
    // Save Tutorial in the database
    Reviews.create(reviews)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the review.",
        });
      });
  
};

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Reviews.findAll({
   
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
    Reviews.findAll({
    where: { customer_id: req.params.id }
    
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
//   const { customer_id, menu_id } = req.body;
//   Cart.destroy({ where: { customer_id: customer_id, menu_id: menu_id } })
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
