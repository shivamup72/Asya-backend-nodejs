module.exports = app => {
    const Restaurants = require("../controllers/restaurants.controller");
    var router = require("express").Router();
    // Create a new Tutorial
   // router.post("/", role.create);
    // // Retrieve all Tutorials
     router.get("/getall", Restaurants.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/restaurants', router);
  };