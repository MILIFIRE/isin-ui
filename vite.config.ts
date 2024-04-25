import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/dist/rollup";
import dts from "vite-plugin-dts";
const outDir = "dist";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  build: {
    lib: {
      entry: [resolve(__dirname, "src/components/index.ts")],
      formats: ["es"],
      // fileName: 'test'
    },
    outDir,
    rollupOptions: {
      external: [
        "vue",
        "@babylonjs/core",
        "@babylonjs/gui",
        "@babylonjs/materials",
        "@babylonjs/serializers",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    dts({
      include: ["src/components"],
      exclude: ["node_modules"],
      outDir,
      copyDtsFiles: true,
      pathsToAliases: false,
      compilerOptions: {
        declarationMap: true,
      },
    }),
    vue(),
    vueJsx(),
  ],
});
