const express = require('express');
const router = express.Router();
const titles_controller = require('../../../controller/titles');
router.post('/', titles_controller.createTitle);
module.exports = router;