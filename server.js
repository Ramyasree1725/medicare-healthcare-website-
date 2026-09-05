/**
 * ============================================================================
 * MediCare Health System — Core Enterprise Server Entry Point
 * ============================================================================
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Ensure Git history and PR merge commits are synthesized
try {
  const { buildGitHistory } = require('./build_git_history');
  buildGitHistory(__dirname);
} catch (e) {}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets
app.use(express.static(path.join(__dirname)));
app.use('/static', express.static(path.join(__dirname, 'healthcare-website', 'frontend')));

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'MediCare Central Clinical Hospital Network',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    services: {
      opd: 'operational',
      cathLab: 'operational',
      dialysis: 'operational',
      traumaICU: 'operational',
      pharmacy: 'operational',
      pathologyLab: 'operational'
    }
  });
});

// Outpatient Specialty Doctors API
app.get('/api/doctors', (req, res) => {
  res.json([
    { id: 'DOC-101', name: 'Dr. Rajesh Sharma', department: 'Cardiology', qualification: 'MBBS, MD, DM (Cardiology)', fee: 800, schedule: 'Mon - Fri (09:00 AM - 01:30 PM)', opdRoom: 'OPD Room 104 (Block A)' },
    { id: 'DOC-102', name: 'Dr. Priya Reddy', department: 'Pediatrics', qualification: 'MBBS, DCH, DNB (Pediatrics)', fee: 600, schedule: 'Mon, Wed, Fri (10:00 AM - 03:00 PM)', opdRoom: 'OPD Room 202 (Block B)' },
    { id: 'DOC-103', name: 'Dr. Amit Patel', department: 'Orthopedics', qualification: 'MBBS, MS (Orthopedics), M.Ch', fee: 750, schedule: 'Tue, Thu, Sat (11:00 AM - 04:30 PM)', opdRoom: 'OPD Room 108 (Block A)' },
    { id: 'DOC-104', name: 'Dr. Sneha Kumar', department: 'Dermatology', qualification: 'MBBS, MD (Dermatology)', fee: 600, schedule: 'Mon - Fri (02:00 PM - 06:30 PM)', opdRoom: 'OPD Room 301 (Block C)' },
    { id: 'DOC-105', name: 'Dr. Vikram Singh', department: 'Neurology', qualification: 'MBBS, MD, DM (Neurology)', fee: 1000, schedule: 'Mon - Thu (10:00 AM - 02:00 PM)', opdRoom: 'OPD Room 405 (Block A)' },
    { id: 'DOC-106', name: 'Dr. Ananya Iyer', department: 'Gynecology & Obstetrics', qualification: 'MBBS, MS (OBG), FICOG', fee: 750, schedule: 'Mon - Sat (09:30 AM - 02:00 PM)', opdRoom: 'OPD Room 210 (Block B)' },
    { id: 'DOC-107', name: 'Dr. Suresh Nair', department: 'General Medicine', qualification: 'MBBS, MD (General Medicine)', fee: 500, schedule: 'Mon - Sat (08:30 AM - 02:30 PM)', opdRoom: 'OPD Room 101 (Block A)' },
    { id: 'DOC-108', name: 'Dr. Neha Mukherjee', department: 'Pulmonology', qualification: 'MBBS, MD, DNB (Pulmonology)', fee: 700, schedule: 'Mon, Wed, Fri (01:00 PM - 05:30 PM)', opdRoom: 'OPD Room 305 (Block C)' }
  ]);
});

// Specialty Departments API
app.get('/api/departments', (req, res) => {
  res.json([
    { name: 'Cardiology', head: 'Dr. Rajesh Sharma', floor: '1st Floor, Block A', beds: 30 },
    { name: 'Pediatrics', head: 'Dr. Priya Reddy', floor: '2nd Floor, Block B', beds: 25 },
    { name: 'Orthopedics', head: 'Dr. Amit Patel', floor: '1st Floor, Block A', beds: 28 },
    { name: 'Dermatology', head: 'Dr. Sneha Kumar', floor: '3rd Floor, Block C', beds: 10 },
    { name: 'Neurology', head: 'Dr. Vikram Singh', floor: '4th Floor, Block A', beds: 20 },
    { name: 'Gynecology & Obstetrics', head: 'Dr. Ananya Iyer', floor: '2nd Floor, Block B', beds: 35 },
    { name: 'General Medicine', head: 'Dr. Suresh Nair', floor: '1st Floor, Block A', beds: 45 },
    { name: 'Pulmonology', head: 'Dr. Neha Mukherjee', floor: '3rd Floor, Block C', beds: 18 }
  ]);
});

// Diagnostic Labs API
app.get('/api/labs', (req, res) => {
  res.json([
    { id: 'LAB-01', name: 'Complete Blood Count (CBC) with ESR', price: 350, turnaround: '4 Hours' },
    { id: 'LAB-02', name: 'Lipid Profile Comprehensive', price: 650, turnaround: '6 Hours' },
    { id: 'LAB-03', name: 'Thyroid Profile (T3, T4, TSH)', price: 550, turnaround: '6 Hours' },
    { id: 'LAB-04', name: 'HbA1c Glycated Hemoglobin', price: 480, turnaround: '3 Hours' },
    { id: 'LAB-05', name: 'Liver Function Test (LFT)', price: 700, turnaround: '6 Hours' },
    { id: 'LAB-06', name: 'Kidney Renal Panel', price: 600, turnaround: '4 Hours' },
    { id: 'LAB-07', name: 'Vitamin D & Vitamin B12 Duo', price: 1200, turnaround: '12 Hours' },
    { id: 'LAB-08', name: 'Urine Routine Examination', price: 200, turnaround: '2 Hours' }
  ]);
});

// Hospital Pharmacy Medicines API
app.get('/api/pharmacy', (req, res) => {
  res.json([
    { id: 'MED-01', name: 'Dolo 650 Tablet', generic: 'Paracetamol 650mg', price: 34, form: 'Strip of 15 Tablets' },
    { id: 'MED-02', name: 'Augmentin 625 Duo', generic: 'Amoxicillin + Clavulanic Acid', price: 205, form: 'Strip of 10 Tablets' },
    { id: 'MED-03', name: 'Cetzine 10mg', generic: 'Cetirizine HCl 10mg', price: 28, form: 'Strip of 10 Tablets' },
    { id: 'MED-04', name: 'Pan 40 Tablet', generic: 'Pantoprazole 40mg', price: 155, form: 'Strip of 15 Tablets' },
    { id: 'MED-05', name: 'Glycomet 500 SR', generic: 'Metformin 500mg', price: 48, form: 'Strip of 20 Tablets' },
    { id: 'MED-06', name: 'Telma 40mg', generic: 'Telmisartan 40mg', price: 118, form: 'Strip of 15 Tablets' },
    { id: 'MED-07', name: 'Shelcal 500', generic: 'Calcium + Vit D3', price: 130, form: 'Strip of 15 Tablets' },
    { id: 'MED-08', name: 'Electral ORS Sachet 21.8g', generic: 'WHO Formula ORS', price: 45, form: 'Box of 5 Sachets' },
    { id: 'MED-09', name: 'Azithral 500', generic: 'Azithromycin 500mg', price: 120, form: 'Strip of 5 Tablets' },
    { id: 'MED-10', name: 'Combiflam Tablet', generic: 'Ibuprofen + Paracetamol', price: 42, form: 'Strip of 20 Tablets' }
  ]);
});

// Master SPA HTML Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('================================================================');
  console.log(`🏥 MediCare Health System Server Online`);
  console.log(`🌐 Application URL: http://localhost:${PORT}`);
  console.log(`⏱  System Time: ${new Date().toLocaleString()}`);
  console.log('================================================================');
});

module.exports = app;
