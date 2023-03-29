const mongoose = require("mongoose");

const booking = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.ObjectId,
      ref: "Customer",
      required: [true, "Booking must belong to a customer"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    locationId: {
      type: String,
      required: [true, "Please Specify the location"],
    },

    droneShotId: {
      type: String,
      required: [true, "Drone Shot Id required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Booking = mongoose.model("Booking", booking);

module.exports = Booking;
