import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutuiBingo from '@/packages/nutui.vue';
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import '@/sites/assets/styles/reset.scss';
import '@/packages/utils/touchEmulator';
createApp(App)
    .use(router)
    .use(NutuiBingo)
    .use(NutUI)
    .mount('#app');
