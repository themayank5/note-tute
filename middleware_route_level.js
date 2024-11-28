const express = require('express');
const  reqFilter = require('./middleware')
const app = express();
const route = express.Router();


// make a seperate file for middleware and write you middleware code and then call that file in the maine page

// app.get('', (req,resp) =>{
//     resp.send('<h1>This is home page</h1>')
// })

// app.get('/about', reqFilter, (req,resp) =>{
//     resp.send('<h1>This is about page page</h1>')
// })

// app.get('/home', (req,resp) =>{
//     resp.send('<h1>This is about page page</h1>')
// })

// app.get('/contact', (req,resp) =>{
//     resp.send('<h1>This is contact page page</h1>')
// })

//Route level middleware
route.use(reqFilter);
app.get('', (req,resp) =>{
    resp.send('<h1>This is home page</h1>')
})

app.get('/about', (req,resp) =>{
    resp.send('<h1>This is about page page</h1>')
})

route.get('/gallery', (req,resp) =>{
    resp.send('<h1>This is gallery page page</h1>')
})

route.get('/contact', (req,resp) =>{
    resp.send('<h1>This is contact page page</h1>')
})

app.use('/',route);



app.listen(5000)



