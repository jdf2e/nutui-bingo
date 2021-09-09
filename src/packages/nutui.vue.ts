import { App } from 'vue';
import Luckdraw from './__VUE/luckdraw/index.vue';
import Luckmarquee from './__VUE/luckmarquee/index.vue';
import Luckscratch from './__VUE/luckscratch/index.vue';

function install(app: App) {
  const packages = [Luckdraw,Luckmarquee,Luckscratch];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { install, Luckdraw,Luckmarquee,Luckscratch  };
export default { install, version:'0.0.1'};