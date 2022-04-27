module.exports = (sequelize, Sequelize) => {
  const Favourites = sequelize.define("favourites", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return Favourites;
};
