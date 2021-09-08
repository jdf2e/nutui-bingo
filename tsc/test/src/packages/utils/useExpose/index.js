import { getCurrentInstance } from 'vue';
export function useExpose(apis) {
    const instance = getCurrentInstance();
    if (instance) {
        Object.assign(instance.proxy, apis);
    }
}
