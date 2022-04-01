module.exports = app => {
    const Variant_options = require("../controllers/variant_options.controller");
    var router = require("express").Router();
    // Create a new Tutorial
   // router.post("/signup", Users.Signup);
    // // Retrieve all Tutorials
     router.get("/", Variant_options.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
  //  router.post("/profile", Users.Profile);
 // Update a Tutorial with id
 //router.post("/verify", Users.Verify);
    // // Delete a Tutorial with id
     router.get("/:id", Variant_options.findone);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/variant_options', router);
  };