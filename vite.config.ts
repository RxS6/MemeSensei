import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Only use Replit runtime error overlay in dev
    ...(process.env.NODE_ENV !== "production"
      ? [require("@replit/vite-plugin-runtime-error-modal").default()]
      : []),
    // Only load Cartographer in Replit dev environment
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          // Dynamic import wrapped in function so it won't run on Render
          (() => {
            try {
              return require("@replit/vite-plugin-cartographer").cartographer();
            } catch {
              return null;
            }
          })(),
        ].filter(Boolean)
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
