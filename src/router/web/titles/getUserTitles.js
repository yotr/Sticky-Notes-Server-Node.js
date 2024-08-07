const express = require('express');
const router = express.Router();
const titles_controller = require('../../../controller/titles');
router.get('/:id', titles_controller.getUserTitles);
module.exports = router;