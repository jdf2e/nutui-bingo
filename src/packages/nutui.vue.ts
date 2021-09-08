import { App } from 'vue';
import Luckdraw from './__VUE/luckdraw/index.vue';
import Luckmarquee from './__VUE/luckmarquee/index.vue';

function install(app: App) {
  const packages = [Luckdraw,Luckmarquee];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { install, Luckdraw,Luckmarquee  };
export default { install, version:'0.0.1'};