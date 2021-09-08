import Dialog from './index.vue';
import { render, createVNode, h } from 'vue';
export class DialogOptions {
    title = '';
    content = '';
    cancelText = '取消';
    okText = '确定';
    textAlign = 'center';
    teleport = 'body';
    onUpdate = (value) => { };
    onOk = () => { };
    onCancel = () => { };
    onClose = () => { };
    onClosed = () => { };
    visible = true;
    noFooter = false;
    noOkBtn = false;
    noCancelBtn = false;
    okBtnDisabled = false;
    closeOnPopstate = false;
    lockScroll = false;
}
class DialogFunction {
    options = new DialogOptions();
    constructor(_options) {
        let options = Object.assign(this.options, _options);
        let elWarp = document.body;
        let teleport = options.teleport;
        if (teleport != 'body') {
            if (typeof teleport == 'string') {
                elWarp = document.querySelector(teleport);
            }
            else {
                elWarp = options.teleport;
            }
        }
        const root = document.createElement('view');
        root.id = 'dialog-' + new Date().getTime();
        const Wrapper = {
            setup() {
                options.onUpdate = (val) => {
                    if (val == false) {
                        elWarp.removeChild(root);
                    }
                };
                options.teleport = `#${root.id}`;
                return () => {
                    return h(Dialog, options);
                };
            }
        };
        const instance = createVNode(Wrapper);
        elWarp.appendChild(root);
        render(instance, root);
    }
    close = () => {
    };
    setDefaultOptions = (options) => {
    };
    resetDefaultOptions = () => {
    };
}
const _Dialog = function (options) {
    return new DialogFunction(options);
};
_Dialog.install = (app) => {
    app.use(Dialog);
    app.config.globalProperties.$dialog = _Dialog;
};
export { Dialog };
export default _Dialog;
