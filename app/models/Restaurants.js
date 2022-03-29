module.exports = (sequelize, Sequelize) => {
  const Restaurants = sequelize.define("restaurants", {
    name: {
      type: Sequelize.STRING,
    },
    cuisine: {
      type: Sequelize.TEXT,
    },
    address: {
      type: Sequelize.TEXT,
    },
    phone: {
      type: Sequelize.STRING,
    },
    schedule: {
      type: Sequelize.TEXT,
    },
    owner_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "role",
        key: "id",
      },
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    delivery_charge: {
      type: Sequelize.STRING,
    },
    maximum_time_to_deliver: {
      type: Sequelize.STRING,
    },
    gallery: {
      type: Sequelize.TEXT,
    },
    latitude: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.STRING,
    },
    seo_tags: {
      type: Sequelize.TEXT,
    },
    seo_description: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.INTEGER,
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
    website: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.STRING,
    },
  });
  return Restaurants;
};
