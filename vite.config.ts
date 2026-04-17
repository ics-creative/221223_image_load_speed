import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  base: "./",
  build: {
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        before: fileURLToPath(new URL("./before/index.html", import.meta.url)),
        after: fileURLToPath(new URL("./after/index.html", import.meta.url)),
      },
    },
  },
});
