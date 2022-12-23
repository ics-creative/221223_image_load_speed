import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "src/index.html",
        before: "src/before/index.html",
        after: "src/after/index.html",
        bad_lazy: "src/bad_lazy/index.html",
      },
      output: {
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") {
            return "assets/style.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  base: "/221223_image_load_speed/",
  server: {
    port: 3456,
  },
});
