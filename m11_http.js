// HTTP
// localhost:5000/
// localhost:5000/about
// localhost:5000/contact

const http = require("http")

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("Welcome to our home page!!");
    }

    if(req.url === "/about"){
        res.end("Here is our About")
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you've requested</p>
    <a href = "/"> Back home </a>
    `)
})

server.listen(5000)