const _window = window;
function requestAniFrame() {
    if (typeof _window !== 'undefined') {
        return (_window.requestAnimationFrame ||
            _window.webkitRequestAnimationFrame ||
            function (callback) {
                _window.setTimeout(callback, 1000 / 60);
            });
    }
    else {
        return function (callback) {
            setTimeout(callback, 1000 / 60);
        };
    }
}
export default requestAniFrame();
