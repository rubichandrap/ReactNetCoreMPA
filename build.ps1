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


# Build .NET project
Write-Host "Building .NET project..." -ForegroundColor Green
dotnet build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
