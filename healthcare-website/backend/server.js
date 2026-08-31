const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

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

// In-memory data store for demo (no real DB needed)
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

// Seed some initial data
require('./seed/seedData')();

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

// Root
app.get('/', (req, res) => {
  res.json({ 
    name: 'MediCare Pro API',
    version: '1.0.0',
    endpoints: [
      '/api/auth', '/api/doctors', '/api/patients', '/api/appointments',
      '/api/articles', '/api/symptoms', '/api/departments', '/api/labs',
      '/api/pharmacy', '/api/insurance', '/api/billing', '/api/notifications',
      '/api/reports', '/api/feedback', '/api/emergency'
    ]
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`MediCare Backend running on http://localhost:${PORT}`);
});
