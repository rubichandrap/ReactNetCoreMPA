#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Install React dependencies
echo "Installing React dependencies..."
cd reactnetcorepoc.client
npm install

# Build React app
echo "Building React app..."
npm run build

cd ../ReactNetCorePOC.Server

# Install .NET dependencies
echo "Installing .NET dependencies..."
dotnet restore

# Remove existing assets and generated folders
echo "Cleaning up existing assets..."
rm -rf wwwroot/assets
rm -rf wwwroot/generated

# Copy from dist/generated to wwwroot/generated
echo "Copying React build files..."
mkdir -p wwwroot/generated
cp -r ../reactnetcorepoc.client/dist/generated/* wwwroot/generated/ 2>/dev/null || true
# Copy other files (index.html, manifest.json, etc.)
cp ../reactnetcorepoc.client/dist/*.html wwwroot/ 2>/dev/null || true
cp ../reactnetcorepoc.client/dist/*.json wwwroot/ 2>/dev/null || true
cp ../reactnetcorepoc.client/dist/*.svg wwwroot/ 2>/dev/null || true

# Run .NET server
echo "Starting .NET server..."
dotnet run
