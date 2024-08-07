const express = require('express');
const router = express.Router();
const notes_controller = require('../../../controller/notes');
router.get('/', notes_controller.getAllNotes);
module.exports = router;