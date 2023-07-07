const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 5000


const server = http.createServer((req, res)=> {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)
    //! substring function:
    //! ex: index.html
    //! ex:   0  .  1
    //! 0 = index and 1 = html

    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename, function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
    } else {
        fs.readFile("404.html", (err, data)=> {
            res.writeHead(404, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})