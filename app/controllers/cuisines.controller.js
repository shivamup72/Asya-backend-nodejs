
const db = require("../models");
const   Cuisines = db.cuisines;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {

  console.log("first,", req.body);
  //const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
  if (!req.body.name && !req.body.slug && !req.body.thumbnail) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const cuisines = {
    name: req.body.name,
    slug: req.body.slug,
    thumbnail: req.body.thumbnail,
    created_by: req.body.created_by,
    is_featured: req.body.is_featured,
  };
  // Save Tutorial in the database
  Cuisines.create(cuisines)
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

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Cuisines.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cuisines.",
      });
    });
};

// exports.findOne = (req, res) => {
//   // const title = req.query.title;
//   // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
//   Customers.findOne({ where: { user_id: req.params.id } })
//     .then((data) => {
//       if (!data || data === null) {
//         res.status(400).send({
//           status: false,
//           message: "NO Customer Adress with this profile",
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
