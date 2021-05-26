var express = require("express");
var router = express.Router();
var reviews = require("../models/review");

const reviewControllers = require("../controllers/reviewController");

router.get("/review",  reviewControllers.school_review_get);

router.post("/review", reviewControllers.school_review_post);

module.exports = router;

