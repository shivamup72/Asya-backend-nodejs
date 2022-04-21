module.exports = app => {
    const Reviews = require("../controllers/reviews.controller");
    var router = require("express").Router();
    // Create a new Tutorial
   // router.post("/", role.create);
    // // Retrieve all Tutorials
     router.get("/", Reviews.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Reviews.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/review', router);
  };