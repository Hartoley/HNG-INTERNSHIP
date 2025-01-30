const express = require("express");
const router = express.Router();
const { returnMyDetails } = require("../Controller/firstlevel");

router.get("/", returnMyDetails);

module.exports = router;
