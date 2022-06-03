const jwt = require("jsonwebtoken");
const User = require("./../Models/UserModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, "AESDAS12343", {
    expiresIn: "7d",
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Enter a password and an Email ", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Email ou mot de passe incorrect", 401));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    role: user.role,
  });
});

exports.updateProfile = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    updatedUser,
  });
});

exports.deleteAccount = catchAsync(async (req, res, next) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    message: "Account Deleted",
  });
});

exports.forgetPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("Cette Email n'existe pas", 400));
  }

  autoMailer(req.body.email, user._id);

  res.status(200).json({
    status: "sent",
  });
});

exports.passwordReset = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("+password");

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  res.status(200).json({
    status: "success",
    message: "password Updated successfuly",
  });
});

exports.ChangePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("+password");

  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("Incorrect Password", 401));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  await user.save();

  res.status(200).json({
    status: "success",
    message: "password Updated successfuly",
  });
});

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({ Role: "User" });

  res.status(200).json({
    status: "success",
    data: users,
  });
});

exports.getUserData = catchAsync(async (req, res, next) => {
  let id = req.params.id;

  const foundUser = await User.findById(id);

  (foundUser.password = ""),
    res.status(201).json({
      status: "success",
      data: foundUser,
    });
});
