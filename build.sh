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


# Build .NET project
echo "Building .NET project..."
dotnet build
