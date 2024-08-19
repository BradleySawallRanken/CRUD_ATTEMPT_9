import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CRUD_ATTEMPT_9/',  // Ensure this matches your GitHub repo name
  plugins: [react()],
});
