const db = require("../models");
const Variants = db.Variants;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");
const saltRounds = 10;
// Create and Save a new Tutorial


/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Variants.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Variants.",
      });
    });
};


exports.findone= (req, res) => {
  console.log("req.params.id",req.params.id) 
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Variants.findAll({where:{menu_id:req.params.id}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Variant.",
      });
    });
};