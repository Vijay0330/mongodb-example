const express = require ("express");
const router = express.Router();
const userDetails = require('../controllers/userController');

router.get('/',userDetails.getAllUsers);

router.post('/',userDetails.createUser);

//delete user

router.delete('/:userid',userDetails.deleteUser);

module.exports=router;