import { getCurrentInstance } from 'vue';
export function useExtend(apis) {
    const instance = getCurrentInstance();
    if (instance) {
        Object.assign(instance.proxy, apis);
    }
}
