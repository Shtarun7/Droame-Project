// //REQUIRING THE MODULES
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");
const ejs = require("ejs");
const customerController = require("./controllers/customerController");
const bookingController = require("./controllers/bookingController");

// //ROUTER MIDDLEWARES
const customerRouter = require("./routes/customerRoutes");
const bookingRouter = require("./routes/bookingRoutes");

// //ERROR HANDLER
const errorHandler = require("./middlewares/errorHandler");

// //DB CONNECTION
const connectDb = require("./config/dbConnection");

connectDb();

app.set("view engine", "ejs");

// console.log(path.join(__dirname, "public"));

// //TO PARSE THE DATA FROM CLIENT
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // //ROUTING THE PATHS
app.get("/", (req, res) => {
  res.render("index");
});

//CUSTOMERS

app.get("/createCustomer", (req, res) => {
  res.render("createCustomer");
});

app.get("/searchCustomer", (req, res) => {
  res.render("searchCustomer");
});

app.get("/searchAllCustomers", (req, res) => {
  res.render("searchAllCustomers");
});

app.get("/deleteCustomer", (req, res) => {
  res.render("deleteCustomer");
});
// //CUSTOMERS
// //CREATE A CUSTOMER
app.route("/createCustomer").post(customerController.createCustomer);

// //GET ALL THE CUSTOMERS
app.route("/searchAllCustomers").post(customerController.getAllCustomers);

//GET A SPECIFIC CUTOMER
app.route("/searchCustomer").post(customerController.getCustomer);

app.route("/deleteCustomer").post(customerController.deleteCustomer);
//DELETE A CUSTOMER

//    //UPDATING A CUSTOMER   //DELETING A CUSTOMER
//
//   .patch(customerController.updateCustomer)
//   .delete(customerController.deleteCustomer);

// //BOOKINGS

//CREATE
app.get("/createBooking", (req, res) => {
  res.render("createBooking");
});
app.route("/createBooking").post(bookingController.createBooking);

//SEARCH BOOKING
app.get("/searchBooking", (req, res) => {
  res.render("searchBooking");
});

app.route("/searchBooking").post(bookingController.getBooking);

//GET ALL BOOKINGS
app.get("/searchAllBookings", (req, res) => {
  res.render("searchAllBookings");
});

app.route("/searchAllBookings").post(bookingController.getAllBookings);

//DELETE BOOKINGS
app.get("/deleteBooking", (req, res) => {
  res.render("deleteBooking");
});
app.route("/deleteBooking").post(bookingController.deleteBooking);

//ERROR HANDLER
app.use(errorHandler);

// STARTING THE SERVER
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
