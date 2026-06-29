import { defineConfig } from 'vite'
import { resolve } from 'path'
import Sitemap from 'vite-plugin-sitemap'


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                rainSounds: resolve(__dirname, 'rainsounds.html')
            }
        }
    },
    plugins: [
        Sitemap({
            hostname: 'https://blkscreen.com',
        })
    ]
})