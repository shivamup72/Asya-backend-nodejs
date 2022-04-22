module.exports = app => {
    const  Cart= require("../controllers/cart.controller");
    var router = require("express").Router();
    router.post("/", Cart.create);
    // // Retrieve all Tutorials
     router.get("/", Cart.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Cart.findOne);
    // // Update a Tutorial with id
    router.post("/remove", Cart.removeOne);
    // // Delete a Tutorial with id
   // router.post("/removeall", Cart.removeAll);
    // // Delete all Tutorials
     router.delete("/remove/:id", Cart.removeAll);
    app.use('/api/cart', router);
  };