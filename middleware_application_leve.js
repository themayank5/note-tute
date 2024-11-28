// const express = require('express');

// const app = express();

// const reqFilter =(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please provide age")
//     }
//     else if(req.query.age < 18){
//         resp.send("your age is less then 18,")
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter)
// app.get('', (req,resp) =>{
//     resp.send('<h1>This is home page</h1>')
// })

// app.get('/about', (req,resp) =>{
//     resp.send('<h1>This is about page page</h1>')
// })
// app.listen(5000)


// //types of middleware
// // 1. application-level middleware
// // 2. Rouing level middleware
// // 3. Erroe-handling middleware
// // 4. Built-in middleware
// // 5. third party middleware