const express = require("express");
const { redirectLink } = require("../controllers/shortened.controller");
const router = express.Router();

const shortenedRouter = require("./shortened.route");

/* GET home page. */
router.get("/", (req, res, next) => res.render("index"));
router.get("/:id", redirectLink);
router.use("/shorten", shortenedRouter);

module.exports = router;
