module.exports = (sequelize, Sequelize) => {
    const  Orders= sequelize.define("orders", {
        type: {
        type: Sequelize.STRING
      },
    });
    return Role;
  };