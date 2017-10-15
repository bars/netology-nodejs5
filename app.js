const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.writeHead(200, 'OK');
    res.write('Hello, Express.js');
    res.end();    
})

app.get('/hello/', (req, res) => {
    res.writeHead(200, 'OK')
    res.write('Hello stranger!')
    res.end()
})

app.get('/hello/:name/', (req, res) => {
    res.writeHead(200, 'OK')
    res.write(`Hello, ${req.params.name}`)
    res.end()
})

app.all('/sub*', (req, res) => {
    res.write(`You requested URI: ${req.headers.host + req.url}`)
    res.end()
})

app.post('/post', (req, res) => {
    if (Object.keys(req.body).length > 0)
    {
        postData = JSON.stringify(req.body);
        res.writeHead(200, 'OK')
        res.write(postData)
        console.log(postData)
        res.end()
    }
    else
    {
        res.writeHead(404, 'Not Found')
        res.write('Not Found')
        res.end()
    }
})

app.listen(3000);