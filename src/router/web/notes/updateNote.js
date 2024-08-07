const express = require('express');
const router = express.Router();
const notes_controller = require('../../../controller/notes');
router.put('/:id', notes_controller.updateNote);
module.exports = router;