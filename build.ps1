# Exit on any error
$ErrorActionPreference = "Stop"

# Install React dependencies
cd reactnetcorepoc.client
Write-Host "Installing React dependencies..." -ForegroundColor Green
npm install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Build React app
Write-Host "Building React app..." -ForegroundColor Green
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

cd ../ReactNetCorePOC.Server

# Install .NET dependencies
Write-Host "Installing .NET dependencies..." -ForegroundColor Green
dotnet restore
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Remove existing assets and generated folders
Write-Host "Cleaning up existing assets..." -ForegroundColor Green
Remove-Item wwwroot\assets -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item wwwroot\generated -Recurse -Force -ErrorAction SilentlyContinue

# Copy from dist/generated to wwwroot/generated
Write-Host "Copying React build files..." -ForegroundColor Green
New-Item -ItemType Directory -Path wwwroot\generated -Force
Copy-Item ..\reactnetcorepoc.client\dist\generated\* wwwroot\generated\ -Recurse -Force
# Copy other files (index.html, manifest.json, etc.)
Copy-Item ..\reactnetcorepoc.client\dist\*.html wwwroot\ -Force
Copy-Item ..\reactnetcorepoc.client\dist\*.json wwwroot\ -Force
Copy-Item ..\reactnetcorepoc.client\dist\*.svg wwwroot\ -Force

# Run .NET server
Write-Host "Starting .NET server..." -ForegroundColor Green
dotnet run
