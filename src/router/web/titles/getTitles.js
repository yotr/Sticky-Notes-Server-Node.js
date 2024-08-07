const express = require('express');
const router = express.Router();
const titles_controller = require('../../../controller/titles');
router.get('/', titles_controller.getAllTitles);
module.exports = router;