import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './views/Index.vue';
import Resource from './views/Resource.vue';
import Main from './views/Main.vue';
import config from '../config/env';
const pagesRouter = [];
const modulesPage = import.meta.glob('/src/packages/__VUE/**/doc.md');
for (const path in modulesPage) {
    let name = /packages\/__VUE\/(.*)\/doc.md/.exec(path)[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesPage[path],
        name
    });
}
const modulesPageTaro = import.meta.glob('/src/packages/__VUE/**/*.taro.md');
for (const path in modulesPageTaro) {
    let name = /packages\/__VUE\/(.*)\/doc.taro.md/.exec(path)[1];
    pagesRouter.push({
        path: `/${name}-taro`,
        component: modulesPageTaro[path],
        name: `${name}-taro`
    });
}
const modulesDocs = import.meta.glob('/src/docs/*.md');
for (const path in modulesDocs) {
    let name = /docs\/(.*).md/.exec(path)[1];
    pagesRouter.push({
        path: '/' + name,
        component: modulesDocs[path],
        name
    });
}
const routes = [
    {
        path: '/',
        name: '/',
        component: Main
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: pagesRouter
    },
    {
        path: '/resource',
        name: 'resource',
        component: Resource
    }
];
routes.push({
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
        name: '/'
    }
});
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            const id = to.hash.split('#')[1];
            const ele = document.getElementById(id);
            setTimeout(() => {
                ele && ele.scrollIntoView(true);
            });
        }
    }
});
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
    try {
        setTimeout(() => {
            new Image().src = `${config.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`;
        }, 500);
    }
    catch (error) { }
});
export default router;
