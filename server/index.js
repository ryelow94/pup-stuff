const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

  app.use(express.json())

  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/products", productRoute);

app.listen(process.env.PORT || 4000, () => console.log("server running"));
