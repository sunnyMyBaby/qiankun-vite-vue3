import StScreenfull from '@/components/base-comps/screenfull.vue';
import StSvgIcon from '@/components/base-comps/svg-icon.vue';

export default {
  install: (Vue: any) => {
    Vue.component('st-screenfull', StScreenfull);
    Vue.component('st-svg-icon', StSvgIcon);
  }
};
