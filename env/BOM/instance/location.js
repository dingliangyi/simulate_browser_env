// location对象
let location = {};
Object.setPrototypeOf(location, Location.prototype);
dingvm.toolsFunc.defineProperty(location, "valueOf", {
    configurable: false,
    enumerable: false,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "valueOf", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "ancestorOrigins", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "ancestorOrigins_get", arguments)
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(location, "href", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "href_get", arguments, 'https://www.google.com/')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "href_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "origin", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "origin_get", arguments, 'https://www.google.com')
    },
    set: undefined
});
dingvm.toolsFunc.defineProperty(location, "protocol", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "protocol_get", arguments, 'https:')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "protocol_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "host", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "host_get", arguments, 'www.google.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "host_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "hostname", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hostname_get", arguments, 'www.google.com')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hostname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "port", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "port_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "port_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "pathname", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "pathname_get", arguments, '/')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "pathname_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "search", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "search_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "search_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "hash", {
    configurable: false,
    enumerable: true,
    get: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hash_get", arguments, '')
    },
    set: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "hash_set", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "assign", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "assign", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "reload", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "reload", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "replace", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "replace", arguments)
    }
});
dingvm.toolsFunc.defineProperty(location, "toString", {
    configurable: false,
    enumerable: true,
    writable: false, value: function () {
        return dingvm.toolsFunc.dispatch(this, location, "location", "toString", arguments)
    }
});
