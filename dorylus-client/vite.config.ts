import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { prismjsPlugin } from 'vite-plugin-prismjs';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
  },
  build: {
    outDir: './../dist',
    chunkSizeWarningLimit: 1000,
    target:'esnext'
  },
  base: mode == 'development' ? '' : './',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      mode: "development",
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      
      includeAssets: ["/favicon.png"],
      strategies: "injectManifest",
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],		//缓存相关静态资源
     
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/dorylus\.ai\/assets\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/dorylus\.ai\/static\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          },
          // {
          // handler: 'NetworkOnly',
          // urlPattern: /\/api\/.*\/*.json/,
          // method: 'POST',
          // options: {
          //   backgroundSync: {
          //     name: 'myQueueName',
          //     options: {
          //       maxRetentionTime: 24 * 60
          //     }
          //   }
          // }
          // }
        ]
      },
      manifest: {
        name: "dorylus Project",
        short_name: "dorylus",
        theme_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      devOptions: {
        enabled:true
      }
    }),
    prismjsPlugin({
      languages: 'all',
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia',
      css: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],  // 这里写入你存放的svg路径
      symbolId: '[name]',
    })
  ],
  server: {
    port: 3030,
    strictPort: true, // 端口被占用直接退出
    https: false,
    open: true,// 在开发服务器启动时自动在浏览器中打开应用程序
    proxy: {
      // 字符串简写写法
      '^/apis': {
        target: mode === 'development' ? loadEnv(mode, process.cwd()).VITE_APP_DEV_URL : loadEnv(mode, process.cwd()).VITE_APP_PROD_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      }
    },
    hmr: {
      overlay: false // 屏蔽服务器报错
    }



  },
}));
