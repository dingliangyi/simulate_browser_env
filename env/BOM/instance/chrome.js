// chrome对象
chrome_ = {};
dingvm.toolsFunc.defineProperty(chrome_, "loadTimes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, chrome_, "chrome", "loadTimes", arguments)
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "csi", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
        return dingvm.toolsFunc.dispatch(this, chrome_, "chrome", "csi", arguments)
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "app", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        },
        getDetails() {
            debugger
        },
        getIsInstalled() {
            debugger
        },
        installState() {
            debugger
        },
        runningState() {
            debugger
        }
    }
});
dingvm.toolsFunc.defineProperty(chrome_, "runtime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
        "ContextType": {
            "BACKGROUND": "BACKGROUND",
            "OFFSCREEN_DOCUMENT": "OFFSCREEN_DOCUMENT",
            "POPUP": "POPUP",
            "SIDE_PANEL": "SIDE_PANEL",
            "TAB": "TAB"
        },
        "OnInstalledReason": {
            "CHROME_UPDATE": "chrome_update",
            "INSTALL": "install",
            "SHARED_MODULE_UPDATE": "shared_module_update",
            "UPDATE": "update"
        },
        "OnRestartRequiredReason": {
            "APP_UPDATE": "app_update",
            "OS_UPDATE": "os_update",
            "PERIODIC": "periodic"
        },
        "PlatformArch": {
            "ARM": "arm",
            "ARM64": "arm64",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformNaclArch": {
            "ARM": "arm",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformOs": {
            "ANDROID": "android",
            "CROS": "cros",
            "FUCHSIA": "fuchsia",
            "LINUX": "linux",
            "MAC": "mac",
            "OPENBSD": "openbsd",
            "WIN": "win"
        },
        "RequestUpdateCheckStatus": {
            "NO_UPDATE": "no_update",
            "THROTTLED": "throttled",
            "UPDATE_AVAILABLE": "update_available"
        },
        connect: function () {
            debugger
        },
        id: undefined,
        sendMessage() {
            debugger
        }
    }
});
