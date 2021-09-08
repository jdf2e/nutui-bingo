export const Hover = {
    mounted(el) {
        el.addEventListener('mouseover', () => {
            el.style.color = '#fa2c19';
        });
        el.addEventListener('mouseleave', () => {
            el.style.color = '';
        });
    }
};
