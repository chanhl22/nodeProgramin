const { Worker, parentPort } = require('worker_threads')

if (isMainThread) { // 메인스레드
    const worker = new Worker(__filename);
    worker.on('message',(value) => console.log('워커로부터',value));
    worker.postMessage('ping');
} else { // 워커스레드
    parentPort.on('message',(value) => {
        parentPort.postMessage('pong');
        parentPort.close();
    })

}