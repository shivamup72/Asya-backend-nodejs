module.exports = app => {
    const users = require("../controllers/users.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", users.create);
    // // Retrieve all Tutorials
    router.get("/getuser", users.findAll);
    // // Retrieve all published Tutorials
   router.post("/updatepassword", users.updatepassword);
    // // Retrieve a single Tutorial with id
    router.post("/updateemail", users.updateemail);
 // // Update a Tutorial with id
    router.post("/updatename", users.updatename);
    // router.get("/:id", tutorials.findOne);
   
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/users', router);
  };