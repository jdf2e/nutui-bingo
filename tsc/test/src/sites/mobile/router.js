import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './components/Index.vue';
import IndexTaro from './components/IndexTaro.vue';
import { nav } from '../../config.json';
const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    }
];
const findComponentName = (name) => {
    let idx = nav.findIndex((i) => i.name.toLowerCase() === name);
    if (idx !== -1) {
        return nav[idx].name;
    }
};
const modulesPage = import.meta.glob('/src/packages/__VUE/**/demo.vue');
for (const path in modulesPage) {
    let name = /packages\/__VUE\/(.*)\/demo.vue/.exec(path)[1];
    routes.push({
        path: '/' + name,
        component: modulesPage[path],
        name,
        meta: {
            ComponentName: findComponentName(name)
        }
    });
    routes.push({
        path: '/' + name + '-taro',
        component: IndexTaro,
        name: name + '-taro',
        meta: {
            ComponentName: findComponentName(name)
        }
    });
}
routes.push({
    name: 'NotFound',
    path: '/:path(.*)+',
    redirect: () => '/'
});
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
