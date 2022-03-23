import { createStore } from 'vuex';

const modulesFiles = import.meta.globEager('./modules/*.ts');
const modules: Record<string, Object> = {};
Object.keys(modulesFiles).forEach((modulePath) => {
  const moduleName: string = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
  const value = modulesFiles[modulePath].default;
  modules[moduleName] = value;
});
const store = createStore({ modules });

export default store;
