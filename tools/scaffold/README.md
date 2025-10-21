## create-react-netcore-mpa

Scaffold a React 19 + .NET 8 MPA. Accepts a project name and optional `--clean`.

### Usage

```bash
npx https://github.com/rubichandrap/ReactNetCoreMPA.git/tools/scaffold MyNewApp
npx https://github.com/rubichandrap/ReactNetCoreMPA.git/tools/scaffold MyNewApp --clean
```

Or clone and run locally:

```bash
git clone https://github.com/rubichandrap/ReactNetCoreMPA.git
cd ReactNetCoreMPA/tools/scaffold
node bin/cli.js MyNewApp
node bin/cli.js MyNewApp --clean
```

### What you get

- Solution: `<ProjectName>.sln`
- Server: `<ProjectName>.Server` (.NET 8, MVC, Views with React root)
- Client: `<projectname>.client` (Vite + React 19 + TS)
- Manifest-based asset injection: `build-manifest.js` generates `_ReactAssets.cshtml`
- Dockerfiles, docker-compose, and `nginx.conf`

### Next steps

```bash
cd MyNewApp
cd MyNewApp.Server && dotnet restore && dotnet run
# in another terminal
cd ../mynewapp.client && npm i && npm run build
```

### Clean mode

Home-only scaffold (HomeController + Index view + minimal client Home page).
