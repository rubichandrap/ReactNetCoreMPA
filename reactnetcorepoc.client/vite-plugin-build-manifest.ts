import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import type { Plugin } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function buildManifestPlugin(): Plugin {
  let isBuilding = false;
  let pendingBuild: Promise<void> | null = null;

  const runBuild = async () => {
    // Check if we're already in a build process to avoid infinite loops
    if (process.env.BUILDING_VITE === "1") {
      console.log("🔄 Build already in progress, skipping...");
      return;
    }

    if (isBuilding) {
      // Prevent overlapping runs — wait for current build to finish
      return pendingBuild;
    }

    isBuilding = true;

    pendingBuild = new Promise<void>((resolve, reject) => {
      // Set the flag to prevent infinite loops
      const env = { ...process.env, BUILDING_VITE: "1" };

      const child = exec("npm run build", { cwd: __dirname, env }, (err) => {
        isBuilding = false;
        if (err) {
          console.warn("⚠️ Build manifest failed:", err.message);
          reject(err);
        } else {
          console.log("✅ Build manifest generated/updated");
          resolve();
        }
      });

      // Stream live output to console
      child.stdout?.pipe(process.stdout);
      child.stderr?.pipe(process.stderr);
    });

    return pendingBuild;
  };

  return {
    name: "build-manifest",

    // Wait for manifest build to complete before proceeding
    async buildStart() {
      await runBuild();
    },

    // Re-run manifest build when source files change
    async handleHotUpdate({ file }) {
      if (file.replace(/\\/g, "/").includes("/src/")) {
        await runBuild();
      }
    },
  };
}
