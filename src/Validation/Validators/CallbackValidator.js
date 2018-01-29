export default class CallbackValidator {
    constructor(callback) {
        this.callback = callback;
    }

    validate(...parameters) {
        return this.callback(...parameters);
    }
}
