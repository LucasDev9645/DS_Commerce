import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginSass()],
});
