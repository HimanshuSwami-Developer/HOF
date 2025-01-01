import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // build: {
    //     chunkSizeWarningLimit: 100000000
    // },
    base: "/houseoffreelance",
    build: {
      // outDir: 'dist',  // Specifies where the build files will be output (default is "dist")
      assetsDir: 'assets',  // Customize the folder for assets like images, fonts, etc.
      sourcemap: false,  // Disable sourcemaps for production (set to true for debugging purposes)
      minify: 'terser',  // Minify the build using terser (you can also use 'esbuild' for faster builds)
      chunkSizeWarningLimit: 15000,  // Set chunk size warning limit (in KB)
    },
  
    // Server preview configuration for local production preview
    preview: {
      port: 5000,  // Change the port for the preview server
      open: true,  // Automatically open the app in the browser
    },
  
    // Optimize dependencies (e.g., pre-bundling)
    optimizeDeps: {
      include: ['framer-motion'],  // Add any dependencies you want to pre-bundle (optional)
      include: ['three', 'three-mesh-bvh'], // Pre-bundle ESM dependencie
    },
    resolve: {
      alias: {
        'three-mesh-bvh': 'three-mesh-bvh/src/index.js',
      },
    },

  })
