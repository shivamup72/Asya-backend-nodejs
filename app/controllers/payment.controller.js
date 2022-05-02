const db = require("../models");
const Payment = db.Payment;
const Orders = db.Orders;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const {
    // order_code,
    // amount_to_pay,
    // amount_paid,
    // payment_method,
    // identifier,
    // data,
    paymetdata,
  } = req.body;
  console.log("first,", paymetdata);

  if (!paymetdata) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const payment = {
    order_code: paymetdata.order_code,
    amount_to_pay: paymetdata.amount_to_pay,
    amount_paid: paymetdata.amount_paid,
    payment_method: paymetdata.payment_method,
    identifier: paymetdata.identifier,
    data: paymetdata.data,
  };
  // Save Tutorial in the database
  Payment.create(payment)
    .then((data) => {
      res.status(200).send({
        message: "Payment  successfully.",
        status: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the payment.",
      });
    });
};

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Cart.findAll()
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
  Cart.findAll({ where: { customer_id: req.params.id } })
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
