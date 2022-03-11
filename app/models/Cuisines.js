
module.exports = (sequelize, Sequelize) => {
  const Cuisines = sequelize.define("cuisines", {
    name : {
      type: Sequelize.STRING,
    },
    slug : {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    is_featured: {
      type: Sequelize.INTEGER,
    },
    created_by: {
        type: Sequelize.INTEGER,
      },
  });
  return Cuisines
};
