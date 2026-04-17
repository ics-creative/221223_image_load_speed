import { resolve } from "node:path";

import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  base: "./",
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        before: resolve(__dirname, "before/index.html"),
        after: resolve(__dirname, "after/index.html"),
      },
    },
  },
});
