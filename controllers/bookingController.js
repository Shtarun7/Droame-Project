const asyncHandler = require("express-async-handler");
const Booking = require("./../models/bookingModel");
//@desc get all customers
//route get/api/customer
//acess to admin

exports.getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find();
  res.status(200).json({ bookings });
});

//@desc get customers
//route get/api/customer/:id
//acess to admin

exports.getBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.body.id).populate("customerId");
  res.status(200).json({ booking });
});

// @desc createcustomers
// route post/api/customer
// acess to admin
exports.createBooking = asyncHandler(async (req, res) => {
  const { customerId, locationId, droneShotId } = req.body;

  if (!customerId || !locationId || !droneShotId) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const booking = await Booking.create({
    customerId,
    locationId,
    droneShotId,
  });

  res.status(201).json(booking);
});

//@desc update customers
//route patch/api/customer/:id
//acess to admin

//@desc delete customers
//route delete/api/customer/:id
//acess to admin
exports.deleteBooking = asyncHandler(async (req, res) => {
  //   console.log(req.params.id);
  const booking = await Booking.findById(req.body.id);
  //   console.log(booking);
  if (!booking) {
    // res.json({ msg: "i love shradda" });
    res.status(404);
    throw new Error("Booking does not exist");
  }

  await Booking.findByIdAndDelete(req.body.id);
  res.json({ booking });
});
