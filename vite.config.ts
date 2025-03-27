import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: "0.0.0.0",
    origin: "*",
  },
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@components": "/src/components",
    },
  },
});
