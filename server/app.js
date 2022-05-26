const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const path = require("path");

const AppError = require("./utils/appError");
const userRouter = require("./Routes/UserRouter");
const resRouter = require("./Routes/ReservationRouter");

const app = express();

console.log("Session: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/reservation", resRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't Find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
