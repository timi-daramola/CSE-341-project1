const express = require('express');
const router = express.Router();

const contactController = require('../controllers/userController');

router.get('/', contactController.getAll);

router.get('/:id', contactController.getSingle);

module.exports = router;