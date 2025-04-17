import { defineConfig } from 'vitest/config'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  test: { globals: true, environment: "jsdom", setupFiles: "./setupTests.ts" }
})
