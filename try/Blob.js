const fs = require('fs');

class BlobSimulator {
    constructor(data, options = {}) {
        this.data = Buffer.from(data, options.encoding || 'utf8');
        this.type = options.type || '';
    }

    async write(filePath) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, this.data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    async read(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(new BlobSimulator(data, {type: this.type}));
                }
            });
        });
    }
}

// 使用示例
const myBlob = new BlobSimulator('Hello, world!', {type: 'text/plain'});

// 写入文件
myBlob.write('example.txt')
    .then(() => {
        console.log('Data written to file.');

        // 读取文件
        return BlobSimulator.read('example.txt');
    })
    .then((readBlob) => {
        console.log('Read file content:', readBlob.data.toString('utf8'));
    })
    .catch((err) => {
        console.error('Error:', err);
    });
