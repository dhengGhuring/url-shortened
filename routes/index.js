const express = require("express");
const router = express.Router();

const shortenedRouter = require("./shortened.route");

/* GET home page. */
router.get("/", (req, res, next) => res.render("index"));
router.use("/shorten", shortenedRouter);

module.exports = router;
