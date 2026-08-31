/**
 * Auth Controller - Login, Register, Profile
 */
const { v4: uuidv4 } = require('uuid');

// Simple in-memory users for demo
if (!global.db.users) global.db.users = [];

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    // Demo: accept any credentials, create/find user
    let user = global.db.users.find(u => u.email === email);
    if (!user) {
      user = {
        id: uuidv4(),
        email,
        name: email.split('@')[0],
        role: 'patient',
        createdAt: new Date().toISOString()
      };
      global.db.users.push(user);
    }
    res.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
      token: 'demo-jwt-token-' + user.id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    if (global.db.users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const user = {
      id: uuidv4(),
      email,
      name: name || email.split('@')[0],
      phone: phone || '',
      role: 'patient',
      createdAt: new Date().toISOString()
    };
    global.db.users.push(user);
    res.status(201).json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
      token: 'demo-jwt-token-' + user.id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  res.json({ success: true, data: global.db.users.map(u => ({ id: u.id, email: u.email, name: u.name, role: u.role })) });
};

exports.getById = async (req, res) => {
  const user = global.db.users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ success: true, data: { id: user.id, email: user.email, name: user.name, role: user.role } });
};

exports.create = exports.register;
exports.update = async (req, res) => {
  const idx = global.db.users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  global.db.users[idx] = { ...global.db.users[idx], ...req.body, updatedAt: new Date().toISOString() };
  res.json({ success: true, data: global.db.users[idx] });
};
exports.delete = async (req, res) => {
  global.db.users = global.db.users.filter(u => u.id !== req.params.id);
  res.json({ success: true });
};
exports.search = async (req, res) => res.json({ success: true, data: [] });
exports.filter = async (req, res) => res.json({ success: true, data: [] });
exports.export = async (req, res) => res.json({ success: true });
exports.import = async (req, res) => res.json({ success: true });
exports.stats = async (req, res) => res.json({ success: true, totalUsers: global.db.users.length });
// JWT and session handling improvements
