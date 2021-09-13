//import { App } from 'vue';
import Luckdraw from './__VUE/luckdraw/index.taro.vue';
import Luckmarquee from './__VUE/luckmarquee/index.taro.vue';
import Luckscratch from './__VUE/luckscratch/index.taro.vue';
import Luckgiftbox from './__VUE/luckgiftbox/index.taro.vue';

function install(app: any) {
  const packages = [Luckdraw,Luckmarquee,Luckscratch,Luckgiftbox];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { Luckdraw,Luckmarquee,Luckscratch,Luckgiftbox  };
export default { install, version:'0.0.1'};