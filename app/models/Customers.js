
const users = require("./Users");

module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define("customers", {
    address_1: {
      type: Sequelize.STRING,
    },
    coordinate_1: {
      type: Sequelize.STRING,
    },
    address_2: {
      type: Sequelize.STRING,
    },
    coordinate_2: {
      type: Sequelize.STRING,
    },
    address_3: {
      type: Sequelize.STRING,
    },
    coordinate_3: {
      type: Sequelize.STRING,
    },
  
    user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
    },
  });
  return Customers
};
