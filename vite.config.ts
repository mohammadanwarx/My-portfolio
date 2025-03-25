
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add base path for GitHub Pages deployment
  // If deploying to https://<USERNAME>.github.io/, set base to '/'
  // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
  base: process.env.GITHUB_PAGES === 'true' ? '/<REPO_NAME>/' : '/',
  build: {
    outDir: 'dist',
  },
}));
