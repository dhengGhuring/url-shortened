const express = require("express");
const { shortenLink } = require("../controllers/shortened.controller");
const router = express.Router();

/* GET users listing. */
router.post("/", shortenLink);

module.exports = router;
