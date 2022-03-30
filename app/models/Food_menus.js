
module.exports = (sequelize, Sequelize) => {
    const Food_menus = sequelize.define("food_menus", {
        name : {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
         references: {
          model: 'food_categories',
          key: "id",
        },
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
         references: {
          model: 'restaurants',
          key: "id",
        },
      },
      items: {
        type: Sequelize.TEXT,
      },
      details: {
        type: Sequelize.TEXT,
      },
      nutrition_fact: {
        type: Sequelize.TEXT,
       
      },
      warnings: {
        type: Sequelize.TEXT,
      },
      servings: {
        type: Sequelize.STRING,
      },
      availability: {
        type: Sequelize.INTEGER,
      },
      has_discount: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.TEXT,
      },
      discounted_price: {
        type: Sequelize.TEXT,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      
      created_at: {
        type: Sequelize.INTEGER,
      },
      updated_at: {
        type: Sequelize.INTEGER,
      },
      has_variant: {
        type: Sequelize.INTEGER,
      },
    });
    return Food_menus;
  };
  