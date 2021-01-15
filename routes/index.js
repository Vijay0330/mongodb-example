const express = require('express');
const router = express.Router();

const post = require("./posts");
const user =require("./userRoute");

router.use("/posts",post);
router.use("/user",user);

module.exports =router;