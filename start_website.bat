@echo off
title MediCare Health System - Hospital Portal
color 0B

echo ================================================================
echo           MediCare Health System - Enterprise Portal
echo ================================================================
echo.
echo [1/2] Starting MediCare Backend & Outpatient Services...
echo [2/2] Opening Hospital Web Portal on http://localhost:5000
echo.

cd /d "%~dp0"

:: Launch default browser to localhost
start "" "http://localhost:5000"

:: Start the express server from root server.js
if exist "server.js" (
    node server.js
) else (
    cd healthcare-website\backend
    node server.js
)

pause
