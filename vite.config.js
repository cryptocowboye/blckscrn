import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
    plugins: [
        Sitemap({
            hostname: 'https://blkscreen.com',
        })
    ]
})