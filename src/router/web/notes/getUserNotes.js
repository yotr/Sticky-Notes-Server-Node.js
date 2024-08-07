const express = require('express');
const router = express.Router();
const notes_controller = require('../../../controller/notes');
router.get('/:id', notes_controller.getUserNotes);
module.exports = router;