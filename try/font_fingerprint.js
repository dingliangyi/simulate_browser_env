var rand = {
    "noise": function () {
        var SIGN = Math.random() < Math.random() ? -1 : 1;
        return Math.floor(Math.random() + SIGN * Math.random());
    },
    "sign": function () {
        const tmp = [-1, -1, -1, -1, -1, -1, +1, -1, -1, -1];
        const index = Math.floor(Math.random() * tmp.length);
        return tmp[index];
    }
};
Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    get () {
        const height = Math.floor(this.getBoundingClientRect().height);
        const valid = height && rand.sign() === 1;
        const result = valid ? height + rand.noise() : height;
        return result;
    }
});