import { ref } from 'vue';
const browserBlack = () => {
    return (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
};
export class RefData {
    static instance;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new RefData();
            let localTheme = localStorage.getItem('nutui-theme-color');
            if (localTheme) {
                this.instance.themeColor.value = localTheme;
            }
        }
        return this.instance;
    }
    currentRoute = ref('/');
    _themeColor = ref('black');
    get themeColor() {
        return this._themeColor;
    }
    set themeColor(v) {
        this._themeColor = v;
    }
}
