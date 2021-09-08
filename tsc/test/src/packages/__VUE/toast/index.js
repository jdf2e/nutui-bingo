import { createVNode, render } from 'vue';
import Toast from './index.vue';
const defaultOptions = {
    msg: '',
    id: '',
    duration: 2000,
    center: true,
    type: 'text',
    customClass: '',
    bottom: 30,
    size: 'base',
    icon: null,
    textAlignCenter: true,
    loadingRotate: true,
    bgColor: 'rgba(0, 0, 0, .8)',
    onClose: null,
    unmount: null,
    cover: false,
    coverColor: 'rgba(0, 0, 0, 0)',
    closeOnClickOverlay: false
};
let idsMap = [];
let optsMap = [];
const clearToast = (id) => {
    if (id) {
        const container = document.getElementById(id);
        optsMap = optsMap.filter(item => item.id !== id);
        idsMap = idsMap.filter(item => item !== id);
        if (container) {
            document.body.removeChild(container);
        }
    }
    else {
        idsMap.forEach(item => {
            const container = document.getElementById(item);
            if (container) {
                document.body.removeChild(container);
            }
        });
        optsMap = [];
        idsMap = [];
    }
};
const updateToast = (opts) => {
    const container = document.getElementById(opts.id);
    if (container) {
        const currentOpt = optsMap.find(item => item.id === opts.id);
        if (currentOpt) {
            opts = { ...defaultOptions, ...currentOpt, ...opts };
        }
        else {
            opts = { ...defaultOptions, ...opts };
        }
        const instance = createVNode(Toast, opts);
        render(instance, container);
        return instance.component.ctx;
    }
};
const mountToast = (opts) => {
    opts.unmount = clearToast;
    let _id;
    if (opts.id) {
        _id = opts.id;
        if (idsMap.find(item => item === opts.id)) {
            return updateToast(opts);
        }
    }
    else {
        _id = new Date().getTime() + '';
    }
    opts = { ...defaultOptions, ...opts };
    opts.id = _id;
    idsMap.push(opts.id);
    optsMap.push(opts);
    const container = document.createElement('div');
    container.id = opts.id;
    const instance = createVNode(Toast, opts);
    render(instance, container);
    document.body.appendChild(container);
    return instance.component.ctx;
};
const errorMsg = (msg) => {
    if (!msg) {
        console.warn('[NutUI Toast]: msg不能为空');
        return;
    }
};
export const ToastFunction = {
    text(msg, opts = {}) {
        errorMsg(msg);
        return mountToast({ ...opts, type: 'text', msg });
    },
    success(msg, opts = {}) {
        errorMsg(msg);
        return mountToast({ icon: 'success', ...opts, msg, type: 'success' });
    },
    fail(msg, opts = {}) {
        errorMsg(msg);
        return mountToast({ icon: 'failure', ...opts, msg, type: 'fail' });
    },
    warn(msg, opts = {}) {
        errorMsg(msg);
        return mountToast({ icon: 'tips', ...opts, msg, type: 'warn' });
    },
    loading(msg, opts = {}) {
        return mountToast({
            icon: 'loading',
            ...opts,
            msg,
            type: 'loading'
        });
    },
    hide() {
        clearToast();
    },
    install(app) {
        app.use(Toast);
        app.config.globalProperties.$toast = ToastFunction;
    }
};
export { Toast };
export default ToastFunction;
