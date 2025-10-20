# Start React dev server in background
Start-Process powershell -ArgumentList "-Command", "cd reactnetcorepoc.client; npm run dev"
Start-Sleep -Seconds 10
# Start .NET server
cd ReactNetCorePOC.Server
dotnet watch run