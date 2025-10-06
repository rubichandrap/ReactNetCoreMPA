# Start React dev server in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd reactnetcorepoc.client; npm run dev"
# Start .NET server
cd ReactNetCorePOC.Server
dotnet run
