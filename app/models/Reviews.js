module.exports = (sequelize, Sequelize) => {
    const Reviews = sequelize.define("reviews", {
      order_code: {
        type: Sequelize.STRING,
      },
      customer_id: {
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      review: {
        type: Sequelize.TEXT,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
      },
     timestamp: {
        type: Sequelize.INTEGER,
        defaultValue:parseInt(Date.now()/1000)
      }, 
    });
    return Reviews;
  };
  