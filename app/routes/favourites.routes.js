module.exports = app => {
    const Favourites = require("../controllers/favourites.controller");
    var router = require("express").Router();
    router.post("/", Favourites.create);
    // // Retrieve all Tutorials
    router.get("/", Favourites.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Favourites.findone);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/favourites', router);
  };