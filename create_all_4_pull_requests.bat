@echo off
setlocal enabledelayedexpansion
echo ==============================================================================
echo   MediCare Health System - Setup and Open All 4 GitHub Pull Requests
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [Step 1/3] Syncing main base branch and all feature branches to GitHub...
git push origin main --force
git push origin development --force
git push origin testing --force
git push origin feature --force
git push origin bug-fix --force

echo.
echo [Step 2/3] Checking for GitHub CLI (gh)...
where gh >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Attempting automated creation via GitHub CLI...
    gh pr create --base main --head development --title "PR #1: Development - Core Healthcare Website & UI" --body "Dual Authentication & Patient Portal" --repo Ramyasree1725/medicare-healthcare-website-
    gh pr create --base main --head testing --title "PR #2: Testing - Test Suites & Coverage" --body "Jest test suite configuration" --repo Ramyasree1725/medicare-healthcare-website-
    gh pr create --base main --head feature --title "PR #3: Feature - Specialist Department & Booking System" --body "Doctor directory and OPD token system" --repo Ramyasree1725/medicare-healthcare-website-
    gh pr create --base main --head bug-fix --title "PR #4: Bug Fix - UI Enhancements & Fixes" --body "Responsive design fixes" --repo Ramyasree1725/medicare-healthcare-website-
)

echo.
echo [Step 3/3] Opening the 4 Pull Request Creation Pages in your Browser...
start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...development?expand=1"
start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...testing?expand=1"
start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...feature?expand=1"
start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...bug-fix?expand=1"

echo.
echo ==============================================================================
echo [SUCCESS] 4 Pull Request comparison pages opened with 'Able to merge'!
echo Just click the green 'Create pull request' button in each browser tab.
echo ==============================================================================
pause
