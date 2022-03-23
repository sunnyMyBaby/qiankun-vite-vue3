import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteSvgIcons from 'vite-plugin-svg-icons';
import qiankun from 'vite-plugin-qiankun';
import html from '@rollup/plugin-html';
import path, { resolve } from 'path';
import fs from 'fs';

const entryHtml = fs.readFileSync('./index.html', { encoding: 'utf-8' });

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            }
          }
        }
      ]
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'element-plus'
    ]
  },
  plugins: [
    qiankun('micro-b', { useDevMode: true }),
    // {
    //   name: 'dev html',
    //   apply: 'serve',
    //   transformIndexHtml(indexHtml: string) {
    //     return indexHtml
    //       .replace('<!-- style placeholder -->', '')
    //       .replace(
    //         '<!-- script placeholder -->',
    //         '<script type="module" src="/src/main.ts"></script>'
    //       );
    //   }
    // },
    {
      name: 'build html',
      apply: 'build',
      ...html({
        template: () => entryHtml
          .replace(
            '<!-- script placeholder -->',
            '<script type="text/javascript" src="micro-b.umd.js"></script>'
          )
          .replace(
            '<!-- style placeholder -->',
            '<link rel="stylesheet" type="text/css" href="style.css" />'
          )
      })
    },
    vue(),
    vueJsx(),
    viteSvgIcons({
      iconDirs: [ resolve(process.cwd(), 'src/assets/svg') ],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: { alias: { '@': resolve('./src') } },
  esbuild: {
    // 支持tsx
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  define: { 'process.env': {} },
  base: './', // 打包路径
  build: {
    target: 'esnext',
    outDir: 'micro-b',

    rollupOptions: {
      output: { inlineDynamicImports: true }
      // external: [
      //   'vue',
      //   'element-plus',
      //   'axios',
      //   'vuex',
      //   'vue-router'
      // ]
    },
    lib: {
      entry: path.resolve(__dirname, './index.html'),
      name: 'micro-b',
      fileName: 'micro-b',
      formats: [ 'umd' ]
    }
    // rollupOptions: {
    //   output: [
    //     {
    //       file: 'upload',
    //       dir: 'upload',
    //       format: 'cjs',
    //       name: 'home',
    //       sourcemap: true
    //     }
    //   ]
    // },
    // minify: 'esbuild'
  },
  server: {
    port: 4002,
    open: true,
    cors: true,
    proxy: {
      '^/web/v2/organization/sys/menu/nav': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      },
      '^/web': {
        target: 'https://opencloud-b-dev.sensetime.com/',
        changeOrigin: true
      }
    }
  }
});
