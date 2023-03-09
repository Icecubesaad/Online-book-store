import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api/auth/signup":"http://localhost:5000/",
      "/api/auth/signin":"http://localhost:5000/",
      "/api/auth/details":"http://localhost:5000/",
      "/account/add/addl":"http://localhost:5000/",
      "/account/add/gets":"http://localhost:5000/",
      "/account/add/delete":"http://localhost:5000/",
    },
  },
})
