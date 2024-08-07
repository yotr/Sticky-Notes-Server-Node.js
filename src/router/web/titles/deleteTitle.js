const express = require('express');
const router = express.Router();
const titles_controller = require('../../../controller/titles');
router.delete('/:id', titles_controller.deleteTitle);
module.exports = router;