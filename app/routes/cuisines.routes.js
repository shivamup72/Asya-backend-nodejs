module.exports = app => {
    const Cuisines = require("../controllers/cuisines.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Cuisines.create);
    // // Retrieve all Tutorials
 router.get("/getallcuisines", Cuisines.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
   //  router.get("/getcustomer/:id", Customers.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/cuisines', router);
  };

  