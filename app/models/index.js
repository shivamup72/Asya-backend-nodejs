const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false,
    freezeTableName: true
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.tutorials = require("./tutorial.js")(sequelize, Sequelize);
db.users = require("./Users.js")(sequelize, Sequelize);
db.role = require("./Role.js")(sequelize, Sequelize);
db.customer = require("./Customers.js")(sequelize, Sequelize);
db.cuisines = require("./Cuisines.js")(sequelize, Sequelize);
db.restaurants = require("./Restaurants")(sequelize, Sequelize);
db.Food_categories = require("./Food_categories")(sequelize, Sequelize);
db.Food_menus = require("./Food_menus")(sequelize, Sequelize);
db.Variant_options = require("./Variant_options")(sequelize, Sequelize);
db.Variants = require("./Variants")(sequelize, Sequelize);
db.Cart = require("./Cart")(sequelize, Sequelize);
db.Addons = require("./Addons")(sequelize, Sequelize);
db.Payment_settings = require("./Payment_settings")(sequelize, Sequelize);
db.sequelize.sync({force:false})
.then(()=>{
  console.log("yes re sync done")
})
// db.Food_categories.hasOne(db.Food_menus,{
//   foreignKey:"category_id",
//   as:"food_menus"
// })

// db.Food_menus.belongsTo(db.Food_categories,{
//   foreignKey:"category_id",
//   as:"food_categories"
// })


db.Food_menus.hasOne(db.Cart,{foreignKey:'menu_id'}); 
db.Cart.belongsTo(db.Food_menus ,{foreignKey:'menu_id'});

module.exports = db;
