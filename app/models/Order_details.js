module.exports = (sequelize, Sequelize) => {
    const Order_details = sequelize.define("order_details", {
      order_code: {
        type: Sequelize.STRING,
      },

      menu_id: {
        type: Sequelize.INTEGER,
      },
      servings: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.STRING,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
      },
      note: {
        type: Sequelize.Text,
      },
      variant_id: {
        type: Sequelize.INTEGER,
      },
      addons: {
        type: Sequelize.Text,
      },
    });
    return Order_details;
  };
  