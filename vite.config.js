import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    //add this property
    sourcemap: true,
  },
});

// export default defineConfig({
//   plugins: [react()],
//   build: { //add this property
//       sourcemap: true,
//   },
