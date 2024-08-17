import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import manifest from "./manifest.json" assert { type: "json" };

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), crx({ manifest })],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    define: {
      "process.env": {
        BASE_API_URL: env.VITE_BASE_API_URL,
      },
    },
  };
});