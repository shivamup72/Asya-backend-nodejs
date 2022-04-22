module.exports = app => {
    const Order_details = require("../controllers/order_details.controller");
    var router = require("express").Router();
    router.post("/", Order_details.create);
    // // Retrieve all Tutorials
     router.get("/", Order_details.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/:code", Order_details.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/orderdetails', router);
  };