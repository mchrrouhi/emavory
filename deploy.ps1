# Deployment rapide vers Hostinger
Write-Host "Deploiement en cours..." -ForegroundColor Cyan

# Upload tous les fichiers et dossiers
Write-Host "Upload vers Hostinger..." -ForegroundColor Yellow
scp -i "deploy_key" -P 65002 -r .htaccess index.html blog.html blog-post.html style.css script.js assets/ oil/ tshirt/ test1/ test2/ savona/ product2/ public/ u118534042@185.201.10.97:public_html/

Write-Host ""
Write-Host "DEPLOIEMENT TERMINE!" -ForegroundColor Green
Write-Host "Site: https://emavory.com" -ForegroundColor Cyan
Write-Host "Oil: https://emavory.com/oil" -ForegroundColor Cyan
Write-Host "T-Shirt: https://emavory.com/tshirt" -ForegroundColor Cyan
Write-Host "Test1: https://emavory.com/test1" -ForegroundColor Cyan
Write-Host "Test2: https://emavory.com/test2" -ForegroundColor Cyan
