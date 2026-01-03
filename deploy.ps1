# PowerShell Deployment Script for Hostinger
# This script deploys the local 'dist' folder to a Hostinger server via SCP

param(
    [string]$SSHUser = "u118534042",
    [string]$SSHHost = "185.201.10.97",
    [int]$SSHPort = 65002,
    [string]$RemotePath = "public_html/"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Hostinger Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if dist folder exists
Write-Host "Step 1: Checking if dist folder exists..." -ForegroundColor Yellow
$distPath = Join-Path -Path $PSScriptRoot -ChildPath "dist"

if (-not (Test-Path $distPath)) {
    Write-Host "ERROR: dist folder not found at $distPath" -ForegroundColor Red
    Write-Host "Please run 'npm run build' first!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ dist folder found" -ForegroundColor Green
Write-Host "  Path: $distPath" -ForegroundColor Gray
Write-Host ""

# Step 2: Count files to upload
Write-Host "Step 2: Analyzing files..." -ForegroundColor Yellow
$fileCount = (Get-ChildItem -Path $distPath -Recurse -File).Count
Write-Host "✓ Found $fileCount files to upload" -ForegroundColor Green
Write-Host ""

# Step 3: Prepare SCP command
Write-Host "Step 3: Preparing deployment..." -ForegroundColor Yellow
$SSHTarget = "$SSHUser@$SSHHost"
Write-Host "  SSH Target: $SSHTarget" -ForegroundColor Gray
Write-Host "  Port: $SSHPort" -ForegroundColor Gray
Write-Host "  Remote Path: $RemotePath" -ForegroundColor Gray
Write-Host ""

# Step 4: Execute SCP command
Write-Host "Step 4: Uploading files to Hostinger..." -ForegroundColor Yellow
Write-Host "Please enter your SSH password when prompted:" -ForegroundColor Cyan
Write-Host ""

try {
    # Using SCP to upload dist folder contents
    scp -P $SSHPort -r "$distPath\*" "$SSHTarget`:$RemotePath"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "✓ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Your website is now live at:" -ForegroundColor Cyan
        Write-Host "  https://emavory.com" -ForegroundColor Green
        Write-Host ""
        Write-Host "Test your routes:" -ForegroundColor Cyan
        Write-Host "  https://emavory.com/" -ForegroundColor Green
        Write-Host "  https://emavory.com/test1" -ForegroundColor Green
        Write-Host "  https://emavory.com/test2" -ForegroundColor Green
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "ERROR: Deployment failed with exit code $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
}
catch {
    Write-Host ""
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
