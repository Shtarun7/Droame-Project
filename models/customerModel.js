const mongoose = require("mongoose");

const customer = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer Name required"],
  },

  email: {
    type: String,
    required: [true, "Email required"],
  },

  phone: {
    type: String,
    required: [true, "Phone No required"],
  },
});

const Customer = mongoose.model("Customer", customer);

module.exports = Customer;
