const express = require("express");
const router = express.Router();
const customerController = require("./../controllers/customerController");

//GET ALL THE CUSTOMERS
router.route("/getAllCustomers").get(customerController.getAllCustomers);

//CREATE A CUSTOMER
router.route("/createCustomer").post(customerController.createCustomer);

//GET A SPECIFIC CUTOMER    //UPDATING A CUSTOMER   //DELETING A CUSTOMER
router
  .route("/:id")
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
