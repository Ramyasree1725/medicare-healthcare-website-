/**
 * Auth Routes
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/stats/summary', controller.stats);

module.exports = router;
