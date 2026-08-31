/**
 * Labs Routes
 * Defines all API endpoints for labs resource
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/labsController');

// Middleware for authentication (simplified)
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  // In production, verify JWT
  if (!token && route !== 'auth' && route !== 'articles' && route !== 'symptoms') {
    // Allow public routes
  }
  next();
};

const authorize = (roles = []) => (req, res, next) => {
  // Role-based access control
  next();
};

// Standard CRUD
router.get('/', authenticate, controller.getAll);
router.get('/:id', authenticate, controller.getById);
router.post('/', authenticate, controller.create);
router.put('/:id', authenticate, controller.update);
router.delete('/:id', authenticate, controller.delete);

// Additional endpoints
router.get('/search/:query', authenticate, controller.search);
router.post('/filter', authenticate, controller.filter);
router.get('/export/csv', authenticate, authorize(['admin']), controller.export);
router.post('/import', authenticate, authorize(['admin']), controller.import);
router.get('/stats/summary', authenticate, controller.stats);

// Nested / related endpoints
router.get('/:id/related', authenticate, (req, res) => {
  res.json({ message: 'Related items for labs', id: req.params.id });
});

router.post('/:id/action/:actionName', authenticate, (req, res) => {
  res.json({ message: `Performed ${req.params.actionName} on labs`, id: req.params.id, body: req.body });
});

// Bulk operations
router.post('/bulk/create', authenticate, authorize(['admin']), (req, res) => {
  const items = req.body.items || [];
  res.json({ message: 'Bulk create', count: items.length });
});

router.post('/bulk/update', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Bulk update' });
});

router.post('/bulk/delete', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Bulk delete' });
});

module.exports = router;
