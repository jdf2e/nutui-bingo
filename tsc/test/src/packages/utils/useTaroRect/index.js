import { unref } from 'vue';
export const useTaroRect = (elementRef, Taro) => {
    const element = unref(elementRef);
    return new Promise((resolve) => {
        const query = Taro.createSelectorQuery();
        query.select(`#${element.id}`).boundingClientRect();
        query.exec(function (res) {
            resolve(res[0]);
        });
    });
};
