const express = require ("express");
const router = express.Router();
const buy =require('../controllers/buy');
const review = require('../controllers/comments.controller');

router.post('/',buy.buyOrder)
router.post('/review',review.productReview);
module.exports = router;