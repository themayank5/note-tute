// const http = require('http');
// const data = require('./app');
// http.createServer((req,resp) =>{
//     resp.writeHead(200,{'content-type': 'application/json'});
//     resp.write(JSON.stringify(data));
//     resp.end()
// }).listen(4000)


// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'CURD');
// const filePath1 = `${dirPath}/file1.txt`
// const filePath2 = `${dirPath}/file2.txt`
// const filePath3 = `${dirPath}/file3.js`

// fs.writeFileSync(filePath1,'this is file 1 description')
// fs.writeFileSync(filePath2,'this is file 2 description')
// fs.writeFileSync(filePath3,'// this is file 3 description')

// fs.readFile(filePath1,'utf-8',(err, item) =>{
//     console.log(item)
// })

// fs.appendFile(filePath1, 'and the file name is file1.txt',(err,item) =>{
//     if(!err) console.log("the file is updated")
// })

// fs.rename(filePath1, `${dirPath}/filee2.js`,(err) =>{
//     if(!err) console.log("file is updated")
// })

// fs.unlinkSync(`${dirPath}/filee2.js`)