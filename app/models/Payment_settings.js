module.exports = (sequelize, Sequelize) => {
    const   Payment_settings= sequelize.define("payment_settings", {
        key: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.TEXT
      },
    });
    return Payment_settings;
  };