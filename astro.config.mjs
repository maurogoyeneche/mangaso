// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react()],
  server: {
    // En desarrollo, redirigir todas las rutas 404 a /
    // Esto simula el comportamiento de Vercel
    open: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Middleware para manejar rutas SPA en desarrollo
      middlewareMode: false,
    },
  },
});
