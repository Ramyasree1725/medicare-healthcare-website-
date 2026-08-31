# MediCare Pro - Healthcare Management System

A full-stack healthcare website with working frontend and backend.

## Features
- Patient registration and login
- Doctor listings and profiles
- Appointment booking system
- Health articles and blog
- Symptom checker (basic)
- Departments & Pharmacy
- Emergency request form
- Admin-style dashboard
- REST API for all major operations

## Tech Stack
- **Backend**: Node.js + Express (in-memory data store for easy demo)
- **Frontend**: React 18 + Vite + React Router
- **Other**: UUID, CORS, Body-parser

## Prerequisites
- Node.js 16 or higher
- npm 8+

## Install

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Build

### Frontend production build
```bash
cd frontend
npm run build
```

## Run

### Start Backend API
```bash
cd backend
npm start
```
API will be available at: http://localhost:5000

### Start Frontend (development)
```bash
cd frontend
npm run dev
```
Website will open at: http://localhost:3000  
(Frontend proxies `/api` requests to the backend)

## Project Structure
```
healthcare-website/
├── backend/          # Express API server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── seed/
│   └── server.js     # Entry point
├── frontend/         # React + Vite app
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── index.html
├── docs/
├── data/
└── scripts/
```

## API Endpoints (sample)
- GET  /api/health
- GET  /api/doctors
- POST /api/appointments
- POST /api/auth/login
- POST /api/auth/register
- GET  /api/articles
- GET  /api/symptoms
- GET  /api/departments
- GET  /api/pharmacy

## Notes
- This is a large-scale demo with extensive modular code (100k+ lines).
- No real database required — uses in-memory store.
- Login accepts any email/password for demo purposes.
- Original proprietary work. No open-source license attached.

## License
Proprietary. All rights reserved.
