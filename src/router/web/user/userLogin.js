const express = require('express');
const router = express.Router();
const users_controller = require('../../../controller/users');
router.post('/', users_controller.login);
module.exports = router;