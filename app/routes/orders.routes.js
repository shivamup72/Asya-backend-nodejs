module.exports = app => {
    const  Orders= require("../controllers/orders.Controller");
    var router = require("express").Router();
   // router.post("/", Orders.create);
    // // Retrieve all Tutorials
     router.get("/", Orders.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Orders.findOne);
    // // Update a Tutorial with id
   // router.post("/remove", Cart.removeOne);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/orders', router);
  };