module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    customer_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    menu_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "food_menus",
        key: "id",
      },
    },
    restaurant_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "restaurants",
        key: "id",
      },
    },
    servings: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.TEXT,
    },
    addons: {
      type: Sequelize.TEXT,
    },
    variant_id: {
      type: Sequelize.INTEGER,
    },
  });
  return Cart;
};
