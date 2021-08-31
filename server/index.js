const express = require("express");
const app = express();
const doteenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

//router details
app.use(express.json());
app.use("/api/auth", authRoute);

doteenv.config();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Mongoose connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Backend is running in on ${PORT} port`);
});
