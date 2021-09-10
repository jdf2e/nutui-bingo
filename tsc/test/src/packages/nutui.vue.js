import Luckdraw from './__VUE/luckdraw/index.vue';
import Luckmarquee from './__VUE/luckmarquee/index.vue';
import Luckscratch from './__VUE/luckscratch/index.vue';
import Luckgiftbox from './__VUE/luckgiftbox/index.vue';
function install(app) {
    const packages = [Luckdraw, Luckmarquee, Luckscratch, Luckgiftbox];
    packages.forEach((item) => {
        if (item.install) {
            app.use(item);
        }
        else if (item.name) {
            app.component(item.name, item);
        }
    });
}
export { install, Luckdraw, Luckmarquee, Luckscratch, Luckgiftbox };
export default { install, version: '0.0.1' };
