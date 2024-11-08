import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRouter({
        // Disable SSR
        ssr: true,
        // Pre render the page for SSG
        prerender: true
    }), tsconfigPaths()],
});
