#!/bin/bash

# Start React dev server in background (includes auto-build-manifest)
cd reactnetcorepoc.client
npm run dev &
REACT_PID=$!

# Wait 10 seconds before starting .NET
echo -e "\033[36m⏳ Waiting 5 seconds for React dev server to start...\033[0m"
sleep 10

# Start .NET server
cd ../ReactNetCorePOC.Server
dotnet watch run &

DOTNET_PID=$!

# Cleanup function to kill both processes when script exits
cleanup() {
    echo -e "\033[33m\n🛑 Stopping processes...\033[0m"
    kill $DOTNET_PID 2>/dev/null
    kill $REACT_PID 2>/dev/null
    wait $DOTNET_PID 2>/dev/null
    wait $REACT_PID 2>/dev/null
    exit
}

# Handle SIGINT (Ctrl+C) and SIGTERM
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait $DOTNET_PID
cleanup
