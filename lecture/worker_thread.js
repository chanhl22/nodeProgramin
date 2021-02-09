const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if (isMainThread) { // 메인스레드
    const treads = new Set();
    isMainThread.add(new.Worker(__filename,{
        workerData: {start: 1},
    }))
    isMainThread.add(new.Worker(__filename,{
        workerData: {start: 2},
    }))
    for (let worker of treads) {
        worker.on('message',(value) => console.log('워커로부터',value));
        worker.on('exit', () => {
            treads.delete(Worker);
            if (treads.size === 0){
                console.log('워커 끝~');
            }
        });
    }
} else { // 워커스레드
    parentPort.on('message',(value) => {
        console.log('부모로부터',value);
        parentPort.postMessage('pong');
        parentPort.close();
    })

}