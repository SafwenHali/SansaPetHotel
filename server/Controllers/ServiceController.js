const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const Service = require("../Models/ServiceModel");

exports.addService = catchAsync(async (req, res, next) => {
  const service = await Service.create(req.body);

  res.status(200).json({
    status: "success",
  });
});

exports.deleteService = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
  });
});

exports.getAllServices = catchAsync(async (req, res, next) => {
  const service = await Service.find();

  res.status(200).json({
    status: "success",
    data: service,
  });
});

exports.getServiceById = catchAsync(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: service,
  });
});

exports.updateService = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(204).json({
    status: "success",
  });
});
