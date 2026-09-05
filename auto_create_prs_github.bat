@echo off
setlocal enabledelayedexpansion
echo ==============================================================================
echo   MediCare Health System - Automated GitHub Pull Requests Creator
echo   Target: https://github.com/Ramyasree1725/medicare-healthcare-website-
echo ==============================================================================
echo.

cd /d "%~dp0"

echo Checking for GitHub CLI (gh)...
where gh >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo GitHub CLI found! Creating Pull Requests automatically via GitHub CLI...
    echo.
    
    echo [1/4] Creating PR for 'feature' branch...
    gh pr create --base main --head feature --title "feat: Add Core Healthcare Features & Doctor Modules" --body "### Summary of Changes%0A- Added specialist department and doctor directory%0A- Integrated OPD token booking%0A- Implemented hospital pharmacy components" --repo Ramyasree1725/medicare-healthcare-website-

    echo [2/4] Creating PR for 'development' branch...
    gh pr create --base main --head development --title "dev: Core Healthcare Website Development & UI Modules" --body "### Summary of Changes%0A- Integrated full frontend UI and backend API server%0A- Added user authentication portal" --repo Ramyasree1725/medicare-healthcare-website-

    echo [3/4] Creating PR for 'testing' branch...
    gh pr create --base main --head testing --title "test: Automated Test Suites & Quality Verification" --body "### Summary of Changes%0A- Configured Jest testing framework%0A- Added unit and integration test coverage" --repo Ramyasree1725/medicare-healthcare-website-

    echo [4/4] Creating PR for 'bug-fix' branch...
    gh pr create --base main --head bug-fix --title "fix: Bug Fixes and UI/UX Enhancements" --body "### Summary of Changes%0A- Resolved responsive layout issues%0A- Fixed booking validation" --repo Ramyasree1725/medicare-healthcare-website-

    echo.
    echo ==============================================================================
    echo [SUCCESS] Pull Requests created automatically!
    echo ==============================================================================
) else (
    echo GitHub CLI not logged in or not installed.
    echo Opening GitHub PR creation pages directly in your browser...
    echo.
    start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...feature?expand=1"
    start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...development?expand=1"
    start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...testing?expand=1"
    start "" "https://github.com/Ramyasree1725/medicare-healthcare-website-/compare/main...bug-fix?expand=1"
    echo Opened all 4 PR pages! Just click 'Create pull request' in each tab.
)

echo.
echo ==============================================================================
echo Press any key to exit.
echo ==============================================================================
pause
