const Reservation = require("./../Models/ReservationModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.addReservation = catchAsync(async (req, res, next) => {
  const Reserv = await Reservation.create(req.body);

  res.status(201).json({
    status: "success",
    data: Reserv,
  });
});

exports.getAllReservation = catchAsync(async (req, res, next) => {
  const Reservs = await Reservation.find();

  res.status(200).json({
    status: "success",
    data: Reservs,
  });
});
