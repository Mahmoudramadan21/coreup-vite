import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    headers: {
      // Set Cache-Control for static assets (images, JS, CSS)
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  plugins: [
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    react(),
    // Brotli compression for smaller payloads
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
    }),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
    }),
  ],
  build: {
    polyfillModulePreload: false, // Disable polyfills for modern browsers
    target: "es2020", // Target modern browsers
    minify: "terser", // Use Terser for JS minification
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["lodash", "moment"], // Split heavy dependencies
          // Add chunks for large components
          hero: ["./src/sections/Hero/Hero"],
          success: ["./src/sections/Success/Sucess"],
          howItWorks: ["./src/sections/HowItWorks/HowItWorks"],
          testimonials: ["./src/sections/Testimonials/Testimonials"],
          pricing: ["./src/sections/Pricing/Pricing"],
          cta: ["./src/sections/CTA/CTA"],
          footer: ["./src/sections/Footer/Footer"],
        },
      },
    },
  },
});
