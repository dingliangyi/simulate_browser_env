!function () {

    dingvm.toolsFunc.printLog = function printLog(logList) {
        let log = "";
        if (typeof logList === "string") {
            log += logList;
        } else {
            for (let i = 0; i < logList.length; i++) {
                if (logList[i] instanceof Object) {
                    if (typeof logList[i] === "function") {
                        log += logList[i].toString() + " ";
                    } else if (typeof logList[i] === "object") {
                        try {
                            log += JSON.stringify(logList[i]);
                        } catch (e) {
                            log += dingvm.toolsFunc.getType(logList[i]) + " ";
                        }
                    } else {
                        log += dingvm.toolsFunc.getType(logList[i]) + " ";
                    }
                } else if (typeof logList[i] === "symbol") {
                    log += logList[i].toString() + " ";
                } else {
                    log += logList[i] + " ";
                }
            }
        }
        log += "\r\n";
        if (dingvm.config.print_file) {
            fs.appendFileSync(`./webs/${_name_}/log.txt`, log);
        }
    };

}();