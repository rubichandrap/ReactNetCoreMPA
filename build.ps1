# Exit on any error
$ErrorActionPreference = "Stop"

cd reactnetcorepoc.client
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

cd ../ReactNetCorePOC.Server
# Remove existing assets and generated folders
Remove-Item wwwroot\assets -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item wwwroot\generated -Recurse -Force -ErrorAction SilentlyContinue
# Copy from dist/generated to wwwroot/generated
New-Item -ItemType Directory -Path wwwroot\generated -Force
Copy-Item ..\reactnetcorepoc.client\dist\generated\* wwwroot\generated\ -Recurse -Force
# Copy other files (index.html, manifest.json, etc.)
Copy-Item ..\reactnetcorepoc.client\dist\*.html wwwroot\ -Force
Copy-Item ..\reactnetcorepoc.client\dist\*.json wwwroot\ -Force
Copy-Item ..\reactnetcorepoc.client\dist\*.svg wwwroot\ -Force
dotnet run
