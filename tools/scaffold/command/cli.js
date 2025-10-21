#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

function printUsage() {
  console.log('Usage: npx create-react-netcore-mpa <ProjectName> [--clean] [--dest <dir>]');
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copyFileTemplate(src, dest, replacements) {
  const content = fs.readFileSync(src, 'utf8');
  const replaced = applyReplacements(content, replacements);
  ensureDir(path.dirname(dest));
  fs.writeFileSync(dest, replaced, 'utf8');
}

function applyReplacements(text, replacements) {
  let out = text;
  for (const [from, to] of replacements) {
    out = out.replaceAll(from, to);
  }
  return out;
}

function walkTemplatesDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkTemplatesDir(full));
    else files.push(full);
  }
  return files;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printUsage();
    process.exit(0);
  }

  const projectName = args[0];
  if (!projectName || projectName.startsWith('-')) {
    printUsage();
    process.exit(1);
  }

  const clean = args.includes('--clean');
  const destIndex = args.indexOf('--dest');
  const destRoot = destIndex !== -1 && args[destIndex + 1] ? path.resolve(args[destIndex + 1]) : path.resolve(process.cwd(), projectName);

  const templateRoot = path.join(__dirname, '..', 'templates');
  const baseRoot = path.join(templateRoot, 'base');
  const cleanRoot = path.join(templateRoot, 'clean');

  if (!fs.existsSync(baseRoot)) {
    console.error('Templates not found.');
    process.exit(1);
  }

  const originalSolutionName = 'ReactNetCorePOC';
  const originalServerName = 'ReactNetCorePOC.Server';
  const originalClientDir = 'reactnetcorepoc.client';

  const newSolutionName = projectName;
  const newServerName = `${projectName}.Server`;
  const newClientDir = projectName.toLowerCase() + '.client';

  const replacements = new Map([
    [originalSolutionName + '.Server', newServerName],
    [originalSolutionName, newSolutionName],
    [originalClientDir, newClientDir],
    ['reactnetcorepoc-server', projectName.toLowerCase() + '-server'],
    ['reactnetcorepoc-client', projectName.toLowerCase() + '-client'],
    ['reactnetcorepoc-network', projectName.toLowerCase() + '-network'],
    // Template placeholders
    ['{{SERVER_NAME}}', newServerName],
    ['{{CLIENT_DIR}}', newClientDir],
    ['{{PROJECT_NAME}}', newSolutionName]
  ]);

  const chosenRoot = clean ? cleanRoot : baseRoot;
  const templateFiles = walkTemplatesDir(chosenRoot);

  for (const src of templateFiles) {
    const rel = path.relative(chosenRoot, src);
    const withoutTmpl = rel.replace(/\.tmpl$/i, '');
    let destRel = applyReplacements(withoutTmpl, replacements);
    const dest = path.join(destRoot, destRel);
    copyFileTemplate(src, dest, replacements);
  }

  console.log(`✔ Project scaffolded at ${destRoot}`);
  console.log('Next steps:');
  console.log(`  - cd ${destRoot}`);
  console.log(`  - cd ${newSolutionName}.Server && dotnet restore`);
  console.log(`  - cd ../${newClientDir} && npm install`);
}

main();


