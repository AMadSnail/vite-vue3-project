/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: maxin
 * @Date: 2022-03-29 16:34:25
 * @LastEditors: maxin
 * @LastEditTime: 2022-03-29 16:41:43
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    prot: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: '192.168.11.10:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  }
})
