import { defineConfig } from 'vite'
import postcss from "./postcss.config.js";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {postcss}
})
