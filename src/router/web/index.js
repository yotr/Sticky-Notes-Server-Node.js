const router = require('express').Router();

//users
router.use('/api/users/create', require('./user/createUser')); //create user
router.use('/api/users/login', require('./user/userLogin')); // user login
router.use('/api/users', require('./user/getUsers')); // get all users
// router.use('/user/get', require('./user/auth/getUser')); // get user by id
// router.use('/user/update', require('./user/auth/update')); // update user by id
// router.use('/generateOTP', require('./user/auth/generateOTP')); // generate OTP to verify user;
// router.use('/verifyOTP', require('./user/auth/verifyOTP')); // verify OTP
// router.use('/createResetSession', require('./user/auth/createResetSession')); // verify OTP
// router.use('/resetPassword', require('./user/auth/resetPassword')); // reset password

// notes
router.use('/api/notes/create', require('./notes/createNote')); //create notes
router.use('/api/notes', require('./notes/getNotes')); // get all notes
router.use('/api/notes/users', require('./notes/getUserNotes')); // get all notes






module.exports = router;
