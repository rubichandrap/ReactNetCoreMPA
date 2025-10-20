#!/bin/bash
# Start React dev server in background (includes auto-build-manifest)
cd reactnetcorepoc.client
npm run dev &
REACT_PID=$!

# Cleanup function to kill processes when script exits
cleanup() {
    echo -e "\033[33mStopping processes...\033[0m"
    kill $REACT_PID 2>/dev/null
    exit
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for the React dev server
wait $REACT_PID
