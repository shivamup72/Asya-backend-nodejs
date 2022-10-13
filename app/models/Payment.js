module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    name: {
      type: Sequelize.STRING,
    },
    TransactionKey: {
      type: Sequelize.STRING,
    },
    order_code: {
      type: Sequelize.STRING,
    },
    amount_to_pay: {
      type: Sequelize.STRING,
    },
    amount_paid: {
      type: Sequelize.STRING,
    },
    payment_method: {
      type: Sequelize.STRING,
    },
    identifier: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.TEXT,
    },
    created_at: {
      type: Sequelize.INTEGER,
      defaultValue:parseInt(Date.now()/1000)
    },
    updated_at: {
      type: Sequelize.INTEGER,
      defaultValue:null
    },
  });
  return Payment;
};
