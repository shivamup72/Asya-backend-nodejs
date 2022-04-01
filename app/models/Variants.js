module.exports = (sequelize, Sequelize) => {
  const Variants = sequelize.define("variants", {
    menu_id: {
      type: Sequelize.INTEGER,
    },
    variant: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.STRING,
    },
  });
  return Variants;
};
