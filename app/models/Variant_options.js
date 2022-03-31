module.exports = (sequelize, Sequelize) => {
    const Variant_options = sequelize.define("variant_options", {
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
  
    return Variant_options;
  };
  