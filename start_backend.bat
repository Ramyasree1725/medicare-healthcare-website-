@echo off
title MediCare Backend [Port 5000]
color 0B
echo Starting Backend Server on http://localhost:5000 ...
cd /d "%~dp0healthcare-website\backend"
npm install && npm start
pause
