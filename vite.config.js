import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178, // Ensure the port matches your setup
  },
  resolve: {
    extensions: [".js", ".jsx"], // Ensure JSX files are supported
  },
});
