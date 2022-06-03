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

exports.getById = catchAsync(async (req, res, next) => {
  const Reserv = await Reservation.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: Reserv,
  });
});

exports.updateById = catchAsync(async (req, res, next) => {
  const updatedRes = await Reservation.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );
  res.status(200).json({
    status: "success",
    data: updatedRes,
  });
});

exports.removeById = catchAsync(async (req, res, next) => {
  const removedRes = await Reservation.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
  });
});
