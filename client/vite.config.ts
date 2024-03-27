///<reference types="vitest"/>

import {  defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
i
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    environment:"jsdom"
  }
})
