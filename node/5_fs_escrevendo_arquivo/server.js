const http = require('http');
const fs = require('fs');

const PORT = 5000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        //! use 3 parameters for write a file
        fs.writeFile('archive.txt', name, function(err, data) {
            res.writeHead(302, {
                location: '/'
            })
            return res.end()
        })
    }
})

server.listen(PORT, ()=>{
    console.log(`server running on port `+PORT)
})