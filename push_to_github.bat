@echo off
echo ===================================================
echo Pushing Medicare Project to GitHub...
echo Repository: https://github.com/Ramyasree1725/medicare-healthcare-website-.git
echo ===================================================

git push -u origin --all
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Pushing main branch specifically...
    git push -u origin main
)

echo.
echo ===================================================
echo Finished! Press any key to exit.
echo ===================================================
pause
