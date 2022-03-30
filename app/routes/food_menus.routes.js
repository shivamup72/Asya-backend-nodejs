module.exports = app => {
    const Food_menus = require("../controllers/food_menus.controller");
    var router = require("express").Router();
    //router.post("/", Login.login);
    // // Retrieve all Tutorials
     router.get("/", Food_menus.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
 //router.get("/:id", Login.loginProfile);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/food_menus', router);
  };