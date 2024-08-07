const express = require('express');
const router = express.Router();
const notes_controller = require('../../../controller/notes');
router.delete('/:id', notes_controller.deleteNote);
module.exports = router;