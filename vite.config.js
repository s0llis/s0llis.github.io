import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                todo: resolve(__dirname, 'src/projects/todo-app.html'),
                urlShortener: resolve(__dirname, 'src/projects/url-shortener.html'),
                primeItems: resolve(__dirname, 'src/projects/prime-items.html'),
                messenger: resolve(__dirname, 'src/projects/messenger-prototype.html')
            }
        }
    }
})