const express = require ("express");
const router = express.Router();
const buy =require('../controllers/buy');

router.post('/',buy.buyOrder)

module.exports = router;