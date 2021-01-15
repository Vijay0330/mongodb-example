const express = require('express');
const router = express.Router();

const post = require("./posts");
const user =require("./userRoute");
const buy =require('./buyRoute');
router.use("/posts",post);
router.use("/user",user);
router.use('/buy',buy);
module.exports =router;