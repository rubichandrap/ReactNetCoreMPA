# Use the official .NET 8 runtime as base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Use the official .NET 8 SDK for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files
COPY ["ReactNetCorePOC.Server/ReactNetCorePOC.Server.csproj", "ReactNetCorePOC.Server/"]
COPY ["reactnetcorepoc.client/reactnetcorepoc.client.esproj", "reactnetcorepoc.client/"]

# Restore dependencies
RUN dotnet restore "ReactNetCorePOC.Server/ReactNetCorePOC.Server.csproj"

# Copy all source files
COPY . .

# Build the React client first
WORKDIR /src/reactnetcorepoc.client
RUN npm install
RUN npm run build

# Copy built React files to server wwwroot
WORKDIR /src/ReactNetCorePOC.Server
RUN mkdir -p wwwroot/generated
RUN cp -r ../reactnetcorepoc.client/dist/generated/* wwwroot/generated/ 2>/dev/null || true
RUN cp ../reactnetcorepoc.client/dist/*.html wwwroot/ 2>/dev/null || true
RUN cp ../reactnetcorepoc.client/dist/*.json wwwroot/ 2>/dev/null || true
RUN cp ../reactnetcorepoc.client/dist/*.svg wwwroot/ 2>/dev/null || true

# Build the .NET application
RUN dotnet build "ReactNetCorePOC.Server.csproj" -c Release -o /app/build

# Publish the application
FROM build AS publish
RUN dotnet publish "ReactNetCorePOC.Server.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Create a non-root user for security
RUN adduser --disabled-password --gecos '' appuser && chown -R appuser /app
USER appuser

ENTRYPOINT ["dotnet", "ReactNetCorePOC.Server.dll"]
