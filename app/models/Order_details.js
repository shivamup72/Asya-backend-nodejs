module.exports = (sequelize, Sequelize) => {
    const Order_details = sequelize.define("order_details", {
      order_code: {
        type: Sequelize.STRING,
      },
      // menu_id: {
      //   type: Sequelize.INTEGER,
      // },
      servings: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.STRING,
      },
      // restaurant_id: {
      //   type: Sequelize.INTEGER,
      // },
      note: {
        type: Sequelize.TEXT,
      },
      // variant_id: {
      //   type: Sequelize.INTEGER,
      // },
      // addons: {
      //   type: Sequelize.TEXT,
      // },
    });
    return Order_details;
  };
  