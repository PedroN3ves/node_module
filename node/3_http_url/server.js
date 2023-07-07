const http = require('http');
const PORT = 5000;

var utf8 = require('utf8');

const server = http.createServer((req, res)=> {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name

    // res.writeHead(200, {'Content-Type':'text/html'})
    res.statusCode = 200
    res.setHeader('Content-Type','tex/html; charset=UTF-8')

    if(!name){
        res.end('<h1> Write your name: </h1> <form method="GET"> <input text="text" name="name" /> <input type="submit"  value="Enviar" /> </form>')
    } else {
        res.end(`Seja Bem Vindo ${name}`)
    }
});


server.listen(PORT, () =>{
    console.log(`server running in port ${PORT}`);
});