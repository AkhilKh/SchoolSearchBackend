var express = require("express");
var router = express.Router();
var SchoolInfo = require("../models/schoolInfo");

const SchoolInfoControllers = require("../controllers/schoolInfoController");

router.post("/schoolInfo", SchoolInfoControllers.school_info_post);
router.patch("/schoolInfo/:schoolCode", SchoolInfoControllers.school_info_patch);
router.get("/schoolInfo/:query", SchoolInfoControllers.school_info_get);


module.exports = router;

