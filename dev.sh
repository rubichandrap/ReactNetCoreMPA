#!/bin/bash
# Start React dev server in background
cd reactnetcorepoc.client
npm run dev &
# Start .NET server
cd ../ReactNetCorePOC.Server
dotnet run
