const express = require("express");
const app = express();
const doteenv = require("dotenv")
const mongoose = require("mongoose")


doteenv.config();


mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Mongoose connected")).catch(err => console.log(err))


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend is running in on ${PORT} port`);
});
