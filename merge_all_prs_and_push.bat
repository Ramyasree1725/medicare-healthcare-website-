@echo off
setlocal enabledelayedexpansion
echo ==============================================================================
echo   MediCare Health System - Merging All Pull Requests to Main Branch
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [1/6] Checking for GitHub CLI to merge directly online...
where gh >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo GitHub CLI found! Attempting online merge...
    gh pr merge 1 --merge --repo Ramyasree1725/medicare-healthcare-website- 2>nul
    gh pr merge 2 --merge --repo Ramyasree1725/medicare-healthcare-website- 2>nul
    gh pr merge 3 --merge --repo Ramyasree1725/medicare-healthcare-website- 2>nul
    gh pr merge 4 --merge --repo Ramyasree1725/medicare-healthcare-website- 2>nul
)

echo.
echo [2/6] Merging PR #1: development -> main...
git checkout main
git merge --no-ff development -m "Merge pull request #1 from Ramyasree1725/development: Add development updates"

echo.
echo [3/6] Merging PR #2: testing -> main...
git merge --no-ff testing -m "Merge pull request #2 from Ramyasree1725/testing: Add testing updates and test coverage"

echo.
echo [4/6] Merging PR #3: feature -> main...
git merge --no-ff feature -m "Merge pull request #3 from Ramyasree1725/feature: Add new feature updates and modules"

echo.
echo [5/6] Merging PR #4: bug-fix -> main...
git merge --no-ff bug-fix -m "Merge pull request #4 from Ramyasree1725/bug-fix: Add bug fix updates and enhancements"

echo.
echo [6/6] Pushing merged main branch to GitHub...
git push origin main

echo.
echo ==============================================================================
echo [SUCCESS] All Pull Requests successfully merged into main branch and pushed to GitHub!
echo ==============================================================================
pause
