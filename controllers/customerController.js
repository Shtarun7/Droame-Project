const asyncHandler = require("express-async-handler");
const { findByIdAndUpdate } = require("./../models/customerModel");
const Customer = require("./../models/customerModel");
//@desc get all customers
//route get/api/customer
//acess to admin

exports.getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json({ customers });
});

//@desc get customers
//route get/api/customer/:id
//acess to admin
exports.getCustomer = asyncHandler(async (req, res) => {
  // res.status(200).json({ msg: `customer${req.params.id}` });
  const customer = await Customer.findById(req.body.id);

  if (!customer) {
    res.status(400);
    throw new Error("Customer does not exists");
  }

  res.status(200).json({ customer });
});

// @desc createcustomers
// route post/api/customer
// acess to admin
exports.createCustomer = asyncHandler(async (req, res) => {
  //   res.status(201).json({ data: req.body });

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const customer = await Customer.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  res.status(201).render("index");
});

//@desc update customers
//route patch/api/customer/:id
//acess to admin
exports.updateCustomer = asyncHandler(async (req, res) => {
  const customer = Customer.finOne({ cId: req.params.id });
  if (!customer) {
    res.status(404);
    throw new Error("Customer does not exists");
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ updatedCustomer });
});

//@desc delete customers
//route delete/api/customer/:id
//acess to admin
exports.deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.body.id);
  if (!customer) {
    res.status(404);
    throw new Error("Customer does not exists");
  }

  await Customer.findByIdAndDelete(req.body.id);
  res.status(200).json({ customer });
});
