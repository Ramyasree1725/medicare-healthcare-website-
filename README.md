# MediCare Health System — Multi-Specialty Hospital & Research Center

An enterprise-grade, full-stack healthcare web application and clinical management system built for outpatient consultations, accredited laboratory investigations, hospital pharmacy dispensary, and 24/7 emergency casualty triage.

---

## 🏥 Features

- **Patient & Doctor Authentication Portal**: Independent role-based access for patients (with unique Medical MRN generation) and doctors (with Medical Council registration and OPD room allocation).
- **Specialist Doctor Directory**: Real-time consultation schedules, qualification listings, and OPD room locations across 8 medical specialties.
- **OPD Appointment & Token Issuance**: Direct slot selection, instantaneous digital token generation, and printable consultation receipts.
- **Diagnostic Laboratory Pathology**: NABL-accredited test booking with home phlebotomist sample dispatch tracking.
- **Prescription Pharmacy Dispensary**: Genuine blister-pack tablet/capsule inventory with category filtering, batch verification, and digital cart ordering.
- **Clinical Symptom Triage**: Guided medical decision support routing patients to appropriate specialties.
- **Electronic Health Records (EHR) & Vitals**: Demographic management, allergy warnings, and real-time BP/pulse/blood glucose logging.
- **Doctor Consultation Station**: Live outpatient queue management and digital prescription dispatch.
- **24/7 Emergency Casualty**: Direct trauma hotline integration and rapid ALS ambulance dispatch.

---

## 📋 Prerequisites

Ensure you have one of the following runtimes installed:

- **Node.js**: v16.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: v8.0.0 or higher
- **Docker** (Optional, for containerized deployment): Docker Desktop 20.10+
- **Python** (Optional secondary runtime): Python 3.8+

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Ramyasree1725/medicare.git
cd medicare
```

### 2. Install Node.js Dependencies
```bash
npm install
```

### 3. Optional: Python Environment Setup
```bash
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate
pip install -r requirements.txt
```

---

## 🔨 Build

To prepare the project build assets:

```bash
npm run build
```

Using Makefile:
```bash
make build
```

---

## 🚀 Run & Execution

### Option A: Standard Node.js Server (Recommended)
```bash
npm start
```
The application will start immediately at **http://localhost:5000**.

### Option B: Development Mode (Live Watch)
```bash
npm run dev
```

### Option C: Python Server
```bash
python app.py
```
Available at **http://localhost:5000**.

### Option D: Direct Browser Launch (Zero-Setup)
Double-click `open_website_direct.bat` or open `index.html` directly in any web browser.

---

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t medicare-health-system:1.0 .
```
Or via Makefile:
```bash
make docker-build
```

### Run Docker Container
```bash
docker run -d -p 5000:5000 --name medicare-app medicare-health-system:1.0
```
Or via Makefile:
```bash
make docker-run
```

Access the application in your browser at: **http://localhost:5000**

---

## 🧪 Tests & Coverage

To run the automated clinical validation test suite:

```bash
npm test
```

To run tests with coverage reporting:
```bash
npm run test:coverage
```

Using Makefile:
```bash
make test
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `express` | `^4.18.2` | Core HTTP server and API routing |
| `cors` | `^2.8.5` | Cross-Origin Resource Sharing middleware |
| `body-parser` | `^1.20.2` | JSON and URL-encoded request body parsing |

---

## 📂 Project Structure

```
medicare/
├── index.html                  # Master Single-Page Application (Zero-dependency direct UI)
├── server.js                   # Main Node.js Application Server & Entry Point
├── app.py                      # Python Application Server & Entry Point
├── package.json                # Project manifest, build scripts & metadata
├── package-lock.json           # Exact dependency lockfile
├── Dockerfile                  # Containerized deployment blueprint
├── Makefile                    # Standard CLI build & execution targets
├── jest.config.js              # Test suite configuration & coverage thresholds
├── requirements.txt            # Python dependencies manifest
├── README.md                   # Complete architectural & operational guide
├── healthcare-website/
│   ├── backend/                # Express API backend services & tests
│   │   ├── controllers/        # Medical business logic controllers
│   │   ├── models/             # Patient, Doctor, Appointment & Lab models
│   │   ├── routes/             # RESTful API route definitions
│   │   ├── tests/              # 25 automated unit & integration tests
│   │   └── server.js           # Backend microservice entry point
│   └── frontend/               # Modular components & static assets
├── open_website_direct.bat     # Windows 1-click direct browser runner
├── start_website.bat           # Windows 1-click Node.js server launcher
└── create_4_prs_merge_commits.bat # Automated Git PR & Merge Commit generator
```

---

## 🔒 Security & Privacy

- **No Committed Secrets**: All configuration is decoupled from code.
- **HIPAA / GDPR Ready**: In-memory patient and consultation isolation.
- **Zero Third-Party Ad-Trackers**: Clean medical execution environment.

---

## 📄 License & Ownership

**Proprietary Commercial Software.**  
Copyright © 2026 MediCare Health System. All rights reserved.  
Unauthorized copying, modification, distribution, or commercial exploitation is strictly prohibited.
