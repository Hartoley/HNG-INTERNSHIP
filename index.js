const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5010;
const level0Route = require("./Route/firstroute");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", level0Route);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
