
const express = require('express');
const { CreateNewUser, getAllUsers, getUserbyUserName } = require('../Controller/user.controller');
const { userInputValidation } = require('../Middleware/UserValidator');
const { PasswordValidator } = require('../Middleware/PasswordValidator');
const router= express.Router();


router.post('/register',userInputValidation,CreateNewUser);
router.get('/all', PasswordValidator, getAllUsers);
router.get('/:username',getUserbyUserName);



module.exports = router;