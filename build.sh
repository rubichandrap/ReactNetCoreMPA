#!/bin/bash
set -e  # Exit on any error

cd reactnetcorepoc.client
npm run build

cd ../ReactNetCorePOC.Server
# Remove existing assets and generated folders
rm -rf wwwroot/assets
rm -rf wwwroot/generated
# Copy from dist/generated to wwwroot/generated
mkdir -p wwwroot/generated
cp -r ../reactnetcorepoc.client/dist/generated/* wwwroot/generated/
# Copy other files (index.html, manifest.json, etc.)
cp ../reactnetcorepoc.client/dist/*.html wwwroot/
cp ../reactnetcorepoc.client/dist/*.json wwwroot/
cp ../reactnetcorepoc.client/dist/*.svg wwwroot/
dotnet run
