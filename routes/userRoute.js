const express = require ("express");
const router = express.Router();
const userDetails = require('../controllers/userController');

router.get('/',userDetails.getAllUsers);

router.post('/',userDetails.createUser);

//delete user

router.delete('/:userid',userDetails.deleteUser);

//user names

router.get('/names',userDetails.userName);


//filter by age

router.get('/age',userDetails.ageFilter);

//filter by age limit

router.get('/age/:age',userDetails.ageLimit);
module.exports=router;