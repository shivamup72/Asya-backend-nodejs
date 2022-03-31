module.exports = app => {
    const Variants = require("../controllers/variants.controller");
    var router = require("express").Router();
    // Create a new Tutorial
   // router.post("/signup", Users.Signup);
    // // Retrieve all Tutorials
     router.get("/", Variants.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
  //  router.post("/profile", Users.Profile);
 // Update a Tutorial with id
 //router.post("/verify", Users.Verify);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/variants', router);
  };