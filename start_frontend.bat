@echo off
title MediCare Frontend [Port 3000]
color 0E
echo Starting Frontend Client on http://localhost:3000 ...
cd /d "%~dp0healthcare-website\frontend"
npm install && npm run dev
pause
