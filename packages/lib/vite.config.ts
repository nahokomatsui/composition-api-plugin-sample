import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "lib",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "@vue/composition-api"],
    },
    outDir: "dist/runtime",
  },
});
