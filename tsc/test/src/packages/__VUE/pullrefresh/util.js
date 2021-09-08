export function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
    }
    if (isStopPropagation)
        event.stopPropagation();
}
export function trigger(target, type) {
    const inputEvent = document.createEvent('HTMLEvents');
    inputEvent.initEvent(type, true, true);
    target.dispatchEvent(inputEvent);
}
