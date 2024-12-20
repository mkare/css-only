import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "nested/index.html"),
        "window-size": resolve(__dirname, "window-size/index.html"),
        "light-dark": resolve(__dirname, "light-dark/index.html"),
      },
    },
  },
});
