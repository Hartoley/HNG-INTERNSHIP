const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require('body-parser');
const IntegrationSpecSettings = require("./Src/IntegrationSpec")


const app = express();
const PORT = process.env.PORT || 5010;
const level0Route = require("./Route/firstroute");
app.use(bodyParser.json());

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", level0Route);

app.get("/intergration-spec", (req, res)=>{
  res.json(IntegrationSpecSettings)
})

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
