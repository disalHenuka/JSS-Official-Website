import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ this line fixes blank screen after upload
  plugins: [react()],
})
