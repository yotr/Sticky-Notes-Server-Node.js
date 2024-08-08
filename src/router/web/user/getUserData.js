const express = require('express');
const router = express.Router();
const users_controller = require('../../../controller/users');
router.get('/:id', users_controller.getUserData);
module.exports = router;