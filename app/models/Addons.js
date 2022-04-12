module.exports = (sequelize, Sequelize) => {
  const Addons = sequelize.define("addons", {
    menu_id: {
      type: Sequelize.INTEGER,
    },

    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
  });
  return Addons;
};
