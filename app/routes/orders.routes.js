module.exports = app => {
<<<<<<< HEAD
    const Orders = require("../controllers/Orders.controller");
    var router = require("express").Router();
    // Create a new Tutorial
=======
    const  Orders= require("../controllers/orders.Controller");
    var router = require("express").Router();
>>>>>>> c8696eeb9b348c5096128b3a137e1a4bd2484d15
   // router.post("/", Orders.create);
    // // Retrieve all Tutorials
     router.get("/", Orders.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:id", Orders.findOne);
    // // Update a Tutorial with id
<<<<<<< HEAD
    // router.put("/:id", tutorials.update);
=======
   // router.post("/remove", Cart.removeOne);
>>>>>>> c8696eeb9b348c5096128b3a137e1a4bd2484d15
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
<<<<<<< HEAD
    app.use('/api/order', router);
=======
    app.use('/api/orders', router);
>>>>>>> c8696eeb9b348c5096128b3a137e1a4bd2484d15
  };