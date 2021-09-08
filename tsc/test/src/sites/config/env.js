const config = {
    baseUrl: '',
    isPrd: true
};
switch (import.meta.env.MODE) {
    case 'development':
        config.isPrd = false;
        config.baseUrl = '/devServer';
        break;
    case 'production':
        config.isPrd = true;
        config.baseUrl = 'https://nutui.jd.com';
        break;
}
export default config;
