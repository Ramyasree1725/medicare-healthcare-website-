const crypto = require('crypto');
const Module = require('module');
const originalRequire = Module.prototype.require;

// Built-in fail-proof UUID generator
const uuidMock = {
  v4: () => (typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'id-' + Math.random().toString(36).substring(2) + Date.now().toString(36)),
  default: {
    v4: () => (typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'id-' + Math.random().toString(36).substring(2) + Date.now().toString(36))
  }
};

Module.prototype.require = function(requestPath) {
  if (requestPath === 'uuid') {
    return uuidMock;
  }
  return originalRequire.apply(this, arguments);
};

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// In-memory data store for demo (initialized before routes)
global.db = {
  users: [],
  doctors: [],
  patients: [],
  appointments: [],
  articles: [],
  symptoms: [],
  departments: [],
  labs: [],
  pharmacy: [],
  insurance: [],
  bills: [],
  notifications: [],
  reports: [],
  feedback: [],
  emergencies: []
};

// Seed initial data
require('./seed/seedData')();

// Import routes
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const appointmentRoutes = require('./routes/appointments');
const articleRoutes = require('./routes/articles');
const symptomRoutes = require('./routes/symptoms');
const departmentRoutes = require('./routes/departments');
const labRoutes = require('./routes/labs');
const pharmacyRoutes = require('./routes/pharmacy');
const insuranceRoutes = require('./routes/insurance');
const billingRoutes = require('./routes/billing');
const notificationRoutes = require('./routes/notifications');
const reportRoutes = require('./routes/reports');
const feedbackRoutes = require('./routes/feedback');
const emergencyRoutes = require('./routes/emergency');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/labs', labRoutes);
app.use('/api/pharmacy', pharmacyRoutes);
app.use('/api/insurance', insuranceRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/emergency', emergencyRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MediCare API is running', timestamp: new Date().toISOString() });
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root & SPA routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`MediCare Backend running on http://localhost:${PORT}`);
});
