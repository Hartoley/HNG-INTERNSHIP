const express = require("express");
const router = express.Router();
const { returnMyDetails, classifyNumber } = require("../Controller/firstlevel");

router.get("/", returnMyDetails);
router.get("/api/classify-number", classifyNumber);

module.exports = router;
