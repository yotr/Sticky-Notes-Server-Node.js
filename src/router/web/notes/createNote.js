const express = require('express');
const router = express.Router();
const notes_controller = require('../../../controller/notes');
router.post('/', notes_controller.createNote);
module.exports = router;