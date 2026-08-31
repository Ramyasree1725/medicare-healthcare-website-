# Auto Push to GitHub & Create 4 Pull Requests Script
param(
    [string]$GitHubUsername = "Ramyasree1725",
    [string]$GitHubToken,
    [string]$RepoName = "healthcare-website"
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  MediCare Website - Auto GitHub Push & PR Creator" -ForegroundColor Cyan
Write-Host "  GitHub Profile: https://github.com/Ramyasree1725" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not $GitHubToken) {
    Write-Host "`nGitHub requires a Personal Access Token (starts with ghp_...)" -ForegroundColor Yellow
    Write-Host "Get it here: https://github.com/settings/tokens/new (Check 'repo')`n" -ForegroundColor Yellow
    $GitHubToken = Read-Host "Paste your GitHub Personal Access Token (PAT)"
}

$GitHubUsername = $GitHubUsername.Trim()
$GitHubToken = $GitHubToken.Trim()

if (-not $GitHubToken) {
    Write-Host "Error: GitHub Token is required." -ForegroundColor Red
    Pause
    exit
}

# Step 1: Create GitHub Repository if not exists
Write-Host "`n[1/4] Checking/Creating repository on GitHub: $RepoName..." -ForegroundColor Green
$headers = @{
    "Authorization" = "Bearer $GitHubToken"
    "Accept"        = "application/vnd.github+json"
    "User-Agent"    = "PowerShell-MediCare-Setup"
}

$repoBody = @{
    name        = $RepoName
    description = "MediCare Pro Healthcare Website Full-Stack Application"
    private     = $false
} | ConvertTo-Json

try {
    $createRepoResponse = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $repoBody -ContentType "application/json"
    Write-Host "Repository '$RepoName' created successfully on GitHub!" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 422) {
        Write-Host "Repository '$RepoName' already exists on your GitHub." -ForegroundColor Yellow
    } else {
        Write-Host "Notice: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

# Step 2: Configure Remote URL with Token
Write-Host "`n[2/4] Setting Git Remote..." -ForegroundColor Green
$remoteUrl = "https://${GitHubUsername}:${GitHubToken}@github.com/${GitHubUsername}/${RepoName}.git"

git remote remove origin 2>$null
git remote add origin $remoteUrl

# Step 3: Push Main and 4 Feature Branches
Write-Host "`n[3/4] Pushing main and 4 feature branches to GitHub..." -ForegroundColor Green

$branches = @(
    "main",
    "feature/appointment-booking",
    "feature/auth-security",
    "feature/doctor-profiles",
    "feature/pharmacy-module"
)

foreach ($branch in $branches) {
    Write-Host "Pushing branch: $branch..." -ForegroundColor Cyan
    git push -u origin $branch --force
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  -> Successfully pushed $branch" -ForegroundColor Green
    } else {
        Write-Host "  -> Failed to push $branch" -ForegroundColor Red
    }
}

# Step 4: Create 4 Pull Requests via GitHub API
Write-Host "`n[4/4] Creating 4 Pull Requests on GitHub..." -ForegroundColor Green

$pullRequests = @(
    @{
        title = "Feature: Implement Appointment Booking System"
        head  = "feature/appointment-booking"
        body  = "This PR adds the appointment booking module including doctor selection, date/time scheduling, and patient confirmation."
    },
    @{
        title = "Feature: Add Authentication and Security Module"
        head  = "feature/auth-security"
        body  = "This PR implements user authentication, role-based access control, secure password hashing, and session management."
    },
    @{
        title = "Feature: Doctor Profiles and Department Management"
        head  = "feature/doctor-profiles"
        body  = "This PR adds doctor profile views, specialization filtering, schedules, and department listings."
    },
    @{
        title = "Feature: Pharmacy and Medicine Management"
        head  = "feature/pharmacy-module"
        body  = "This PR introduces the pharmacy module for prescription tracking, medicine catalog, and order management."
    }
)

foreach ($pr in $pullRequests) {
    Write-Host "Creating PR for '$($pr.head)' -> 'main'..." -ForegroundColor Cyan
    $prBody = @{
        title = $pr.title
        head  = $pr.head
        base  = "main"
        body  = $pr.body
    } | ConvertTo-Json

    try {
        $prResponse = Invoke-RestMethod -Uri "https://api.github.com/repos/${GitHubUsername}/${RepoName}/pulls" -Method Post -Headers $headers -Body $prBody -ContentType "application/json"
        Write-Host "  -> Created PR #${($prResponse.number)}: $($prResponse.html_url)" -ForegroundColor Green
    } catch {
        Write-Host "  -> PR for $($pr.head) already exists or status: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "  SUCCESS! All 4 branches and Pull Requests are ready on GitHub!" -ForegroundColor Green
Write-Host "  View your repository: https://github.com/${GitHubUsername}/${RepoName}" -ForegroundColor Green
Write-Host "  View Pull Requests:   https://github.com/${GitHubUsername}/${RepoName}/pulls" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Pause
