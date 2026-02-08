import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig({
  // *** ADDED: Required for GitHub Pages deployment ***
  base: '/my-portfolio/', // Replace 'my-portfolio' with your exact GitHub repository name
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // *** FIXED: Now points to /src in the root ***
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"), // Assuming 'shared' is in the root
      "@assets": path.resolve(import.meta.dirname, "attached_assets"), // Assuming 'attached_assets' is in the root
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  // *** FIXED: Root is the base directory ***
  root: path.resolve(import.meta.dirname), 
  build: {
    // *** FIXED: Output goes to the standard 'dist' folder ***
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
