@echo off
title MediCare Pro - Healthcare Website
color 0A

echo ========================================================
echo        MediCare Pro - Healthcare Platform
echo ========================================================
echo.
echo Starting Server on http://localhost:5000 ...
echo.

cd /d "%~dp0backend"

:: Open browser
start "" "http://localhost:5000"

:: Start the server
node server.js

pause
