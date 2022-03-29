module.exports = (sequelize, Sequelize) => {
    const  Food_categories= sequelize.define("food_categories", {
      name: {
        type: Sequelize.STRING
      },
      is_featured: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.INTEGER
      },
      updated_at: {
        type: Sequelize.INTEGER
      },
      
      thumbnail: {
        type: Sequelize.STRING
      },

    });
    return Food_categories;
  };