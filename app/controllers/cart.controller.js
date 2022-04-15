const db = require("../models");
const Cart = db.Cart;
const Food_menus = db.Food_menus;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  const {
    customer_id,
    menu_id,
    restaurant_id,
    servings,
    quantity,
    pricing,
    note,
    addons,
    variant_id,
  } = req.body;
  console.log("first,", req.body);

  if (
    !customer_id &&
    !menu_id &&
    !restaurant_id &&
    !servings &&
    !quantity &&
    !pricing &&
    !variant_id
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  let check = await Cart.findOne({
    where: { customer_id: customer_id, menu_id: menu_id },
  });
  console.log("first", check);
  if ( check !== null) {
    Cart.update(
      {
        customer_id: customer_id,
        menu_id: menu_id,
        restaurant_id: restaurant_id,
        servings: servings,
        quantity: quantity,
        price: pricing,
        note: note,
        addons: addons,
        variant_id: variant_id,
      },
      { where: { customer_id: customer_id, menu_id: menu_id } }
    )
      .then((result) =>
        res.status(200).send({
          status: true,
          message: "cart update  Successfully",
        })
      )
      .catch((err) =>
        res.status(500).send({
          status: false,
          message: err + "cart update   UnSuccessfully",
        })
      );
  } else {
    // Create a Tutorial
    const cart = {
      customer_id: customer_id,
      menu_id: menu_id,
      restaurant_id: restaurant_id,
      servings: servings,
      quantity: quantity,
      price: pricing,
      note: note,
      addons: addons,
      variant_id: variant_id,
    };
    // Save Tutorial in the database
    Cart.create(cart)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cart.",
        });
      });
  }
};

// /////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Cart.findAll({
    include: [{
      model: Food_menus,
    
      required: true,
    }]
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
  Cart.findAll({ where: { customer_id: req.params.id },
    include: [{
      model: Food_menus,
    
      required: true,
    }] })
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


exports.removeOne = (req, res) => {
  const {customer_id , menu_id }= req.body;
  Cart.destroy({ where: { customer_id:customer_id , menu_id:menu_id  }})
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