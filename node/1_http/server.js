const http = require('http')
var utf8 = require('utf8')

const port = 5000;

// const server = http.createServer((req, res)=>{
//     res.write('Hello, world!')
//     res.end()
// });

// const server = http.createServer((req, res) => {
//     if(req.url === '/home'){
//         res.writeHead( 200, {'Content-Type':'text/plan'})
//         res.write('Home Page')
//         res.end()
//     } else if(req.url === '/about'){
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('About Page')
//     } else{
//         res.writeHead(404, {'Content-Type':'text/plan'})
//         res.write('Page Not Found')
//         res.end()
//     }
// });

const server = http.createServer((req, res)=> {
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1> Home Page </h1> ')
        res.write( '<p> This is the home page</p>')
        res.end()
    } else if(req.url === '/info'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1> Info Page </h1>')
        res.write( '<p> This is the info page </p>')
        res.end()
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-ype':'text/html; charset=UTF-8'})
        res.write('<h1> Contact Page </h1>')
        res.write( '<p> This is the contact page </p>')
        res.end
    } else{
        res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1> Page Not Found</h1> ')
        res.end()
    }
})

server.listen(port, ()=> {
    console.log(` http server running in port ${port}`)
});