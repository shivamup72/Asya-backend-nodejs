module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    password: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    thumbnail: {
      type: Sequelize.STRING,
      defaultValue: "placeholder.png",
    },
    role_id: {
      type: Sequelize.INTEGER,

      references: {
        // This is a reference to another model
        model: {
          tableName: "Role",
          schema: "static",
        },
        // This is the column name of the  referenced model
        key: "role_id",
      },
      defaultValue: 2,
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATEONLY,
      defaultValue: Date.now(),
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATEONLY,
      defaultValue: Date.now(),
    },
  });
  return Users;
};
