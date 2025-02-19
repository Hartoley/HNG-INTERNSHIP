const express = require("express");
const router = express.Router();
const {
  returnMyDetails,
  classifyNumber,
  getBookById,
} = require("../Controller/firstlevel");

router.get("/", returnMyDetails);
router.get("/api/classify-number", classifyNumber);
router.get("/api/v1/books/:bookId", getBookById);

module.exports = router;
