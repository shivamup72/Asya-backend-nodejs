const db = require("../models");
const Payment_settings = db.Payment_settings;
const Op = db.Sequelize.Op;

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Payment_settings.findAll()
    .then((data) => {
      res.send({
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Payment_settings.",
      });
    });
};
