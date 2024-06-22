//todo 异步转同步
// co：这是一个基于 Promise 的异步控制流库，可以将异步代码写成同步风格。
// deasync：这是一个提供同步 API 的库，可以将异步操作转换为同步操作。

//todo async：这是一个功能强大的异步库，提供了多种方法来实现异步转同步，例如：
// async.each()：用于循环执行异步操作，并将其转换为同步操作。
// async.waterfall()：用于串行执行异步操作，并将其转换为同步操作。

const async = require("async");
async.each(data, (item, callback) => {
    // 异步操作
    setTimeout(() => {
        console.log(item);
        callback();
    }, 1000);
}, () => {
    // 所有异步操作完成后执行
    console.log('done');
});

const async = require('async');

//* -------------------------------------------------------------

const tasks = [
    (callback) => {
        // 异步操作 1
        setTimeout(() => {
            callback(null, 'result 1');
        }, 1000);
    },
    (result1, callback) => {
        // 异步操作 2
        setTimeout(() => {
            callback(null, result1 + ' result 2');
        }, 1000);
    }
];

async.waterfall(tasks, (err, result) => {
    // 所有异步操作完成后执行
    console.log(result);
});

//* -------------------------------------------------------------

const co = require('co');

const getData = () => {
    return new Promise((resolve, reject) => {
        // 异步操作
        setTimeout(() => {
            resolve('data');
        }, 1000);
    });
};

const main = co(function* () {
    const data = yield getData();
    console.log(data);
});

main();

//* -------------------------------------------------------------

const deasync = require('deasync');

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        // 异步操作
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const data = deasync(readFile, 'file.txt');
console.log(data);
