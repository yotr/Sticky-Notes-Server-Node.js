const express = require('express');
const router = express.Router();
const titles_controller = require('../../../controller/titles');
router.put('/:id', titles_controller.updateTitleColor);
module.exports = router;