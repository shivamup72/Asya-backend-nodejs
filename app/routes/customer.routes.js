module.exports = app => {
    const Customers = require("../controllers/customer.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Customers.create);
    // // Retrieve all Tutorials
   router.get("/getcustomer", Customers.findAll);
    // // Retrieve all published Tutorials
    router.post("/updatefirst", Customers.updatefirstAddress);
    router.post("/updatesecond", Customers.updatesecondAddress);
    router.post("/updatethird", Customers.updatethirdAddress);
    // // Retrieve a single Tutorial with id
     router.get("/getcustomer/:id", Customers.findOne);
    // // Update a Tutorial with id
    router.put("/updatefirst/:id", Customers.deletefirstAddress);
    router.put("/updatesecond/:id", Customers.deletesecondAddress);
    router.put("/updatethird/:id", Customers.deletethirdAddress);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/customers', router);
  };
  

            