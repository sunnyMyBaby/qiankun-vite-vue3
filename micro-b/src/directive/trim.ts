/**
 * 去掉输入框的输入的所有空格
 */
import { App } from 'vue';
import { trimString } from '@/utils/validate';

const stTrim = (app: App) => {
  app.directive('st-trim', {
    // update(el, { value, modifiers }, vnode) {
    //   try {
    //     const newval = value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
    //     if (value !== newval) {
    //       el.children[0].value = newval;
    //       el.children[0].dispatchEvent(new Event(modifiers.lazy ? 'change' : 'input'));
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    mounted(el) {
      const target = el instanceof HTMLInputElement ? el : el.querySelector('input');
      if (target) {
        target.addEventListener('blur', (e: any) => {
          const input = e;
          if (input && input.target) {
            input.target.value = trimString(`${input.target.value}`);
            input.target.dispatchEvent(new Event('input'));
          }
        });
        // target.addEventListener('blur', (e: any) => {
        //   const input = e;
        //   if (input && input.target) {
        //     input.target.value = trimString(`${input.target.value}`);
        //     input.target.dispatchEvent(new Event('input'));
        //   }
        // });
      }
    }
  });
};

export default stTrim;
