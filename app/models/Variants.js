module.exports = (sequelize, Sequelize) => {
    const  Variants= sequelize.define("variants", {
        menu_id: {
            type: Sequelize.INTEGER,
          },
          name: {
            type: Sequelize.STRING,
          },
          options :{
            type: Sequelize.TEXT,
          },
    });
    return Variants;
  };