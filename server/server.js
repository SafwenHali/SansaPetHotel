const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("Cluster Connection Established"));

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server is running ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection ! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception ! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
