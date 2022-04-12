module.exports = app => {
    const Addons = require("../controllers/addons.controller");
    var router = require("express").Router();
    // Create a new Tutorial
   // router.post("/", role.create);
    // // Retrieve all Tutorials
     router.get("/", Addons.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Addons.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/addons', router);
  };