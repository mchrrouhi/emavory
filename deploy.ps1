# Deployment rapide vers Hostinger
Write-Host "Deploiement en cours..." -ForegroundColor Cyan

# Build si necessaire
if (-not (Test-Path "dist")) {
    Write-Host "Build du projet..." -ForegroundColor Yellow
    npm run build
}

# Upload tous les fichiers
Write-Host "Upload vers Hostinger..." -ForegroundColor Yellow
cd dist
scp -i "$env:USERPROFILE\.ssh\emavory_deploy" -P 65002 -r .htaccess * u118534042@185.201.10.97:public_html/
cd ..

Write-Host ""
Write-Host "✓ DEPLOIEMENT TERMINE!" -ForegroundColor Green
Write-Host "Site: https://emavory.com" -ForegroundColor Cyan
Write-Host "Test1: https://emavory.com/test1" -ForegroundColor Cyan
Write-Host "Test2: https://emavory.com/test2" -ForegroundColor Cyan
