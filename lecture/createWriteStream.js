const fs = require('fs');
const writeStream = fs.createWriteStream('./wrire2.txt');

fs.WriteStream('finish', () => {
    console.log('파일 쓰기 완료');
})

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한번 더 씁니다.\n');
writeStream.end();