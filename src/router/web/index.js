const router = require('express').Router();

//users
// router.use('/user/create', require('./user/auth/register')); //create user
// router.use('/user/login', require('./user/auth/login')); // user login
router.use('/api/users', require('./user/getUsers')); // get all users
// router.use('/user/get', require('./user/auth/getUser')); // get user by id
// router.use('/user/update', require('./user/auth/update')); // update user by id

// router.use('/generateOTP', require('./user/auth/generateOTP')); // generate OTP to verify user;
// router.use('/verifyOTP', require('./user/auth/verifyOTP')); // verify OTP
// router.use('/createResetSession', require('./user/auth/createResetSession')); // verify OTP
// router.use('/resetPassword', require('./user/auth/resetPassword')); // reset password





module.exports = router;
