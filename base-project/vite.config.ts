import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteSvgIcons from 'vite-plugin-svg-icons';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// import styleImport from 'vite-plugin-style-import';
// import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components';
import { resolve } from 'path';

// const HOST = process.env.NODE_ENV === 'dev' ? '' : process.env.VUE_APP_BASE_API;
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [ resolve(process.cwd(), 'src/assets/svg') ],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // })
    // ViteComponents({
    //   customComponentResolvers: [ElementPlusResolver()]
    // }),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus', // 按需引入element-plus 样式
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         const na = name.slice(3);
    //         return `element-plus/theme-chalk/src/${na}.scss`;
    //       },
    //       resolveComponent: (name) => {
    //         return `element-plus/lib/${name}`;
    //       }
    //     }
    //   ]
    // })
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus',
    //       esModule: true,
    //       ensureStyleFile: true,
    //       // resolveStyle: (name) => {
    //       //   console.log(11111, name);
    //       //   return `element-plus/theme-chalk/${name}.css`;
    //       // },
    //       resolveComponent: (name) => {
    //         console.log(222222, name);
    //         return `element-plus/lib/components/${name}`;
    //       }
    //     }
    //   ]
    // })
  ],
  css: { preprocessorOptions: { scss: { charset: false } } },
  resolve: { alias: { '@': resolve('./src') } },
  esbuild: {
    // 支持tsx
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  define: { 'process.env': {} },
  base: './', // 打包路径
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '^/web/v2/organization/sys/menu/nav': {
        target: 'http://localhost:3000/',
        // 'http://jsonplaceholder.typicode.com',
        changeOrigin: true
        // rewrite:
      },
      '^/web': {
        target: 'https://opencloud-b-dev.sensetime.com/',
        // 'http://jsonplaceholder.typicode.com',
        changeOrigin: true
        // rewrite:
      }
    }
  }
});
