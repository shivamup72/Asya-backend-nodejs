module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    code: {
      type: Sequelize.STRING,
    },
    // customer_id: {
    //   type: Sequelize.INTEGER,
    // },
    customer_address_id: {
      type: Sequelize.INTEGER,
    },
    driver_id: {
      type: Sequelize.INTEGER,
    },
    order_placed_at: {
      type: Sequelize.INTEGER,
      //defaultValue:Date.now()
    },
    order_approved_at: {
      type: Sequelize.INTEGER,
    },
    order_preparing_at: {
      type: Sequelize.INTEGER,
    },
    order_prepared_at: {
      type: Sequelize.INTEGER,
    },
    order_delivered_at: {
      type: Sequelize.INTEGER,
    },
    order_canceled_at: {
      type: Sequelize.INTEGER,
    },
    order_status: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.TEXT,
    },
    total_menu_price: {
      type: Sequelize.STRING,
    },
    total_delivery_charge: {
      type: Sequelize.STRING,
    },
    total_vat_amount: {
      type: Sequelize.STRING,
    },
    grand_total: {
      type: Sequelize.STRING,
    },
  });
  return Orders;
};
