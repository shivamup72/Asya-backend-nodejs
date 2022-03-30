const db = require("../models");
const Food_categories = require("../models/Food_categories");
const Food_menus = db.Food_menus;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.type) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
//     // Create a Tutorial
//     const  restaurants= {
//       type: req.body.type,
//     };
//     // Save Tutorial in the database
//     Restaurants.create(restaurants)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the role."
//         });
//       });
//   };

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Food_menus.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Food_menus.",
      });
    });
};
