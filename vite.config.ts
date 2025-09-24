import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bolt/',   // <-- IMPORTANT if your site is served under /bolt/
});
