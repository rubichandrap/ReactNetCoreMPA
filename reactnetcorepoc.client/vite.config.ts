import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import buildManifestPlugin from "./vite-plugin-build-manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), buildManifestPlugin()],
  build: {
    assetsDir: "generated",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate chunks for better caching
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor";
            }
            return "vendor-libs";
          }
          if (id.includes("/src/pages/")) {
            return "pages";
          }
          if (id.includes("/src/components/")) {
            return "components";
          }
        },
      },
    },
  },
});
