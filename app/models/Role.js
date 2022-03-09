module.exports = (sequelize, Sequelize) => {
    const  Role= sequelize.define("role", {
        type: {
        type: Sequelize.STRING
      },
    });
    return Role;
  };