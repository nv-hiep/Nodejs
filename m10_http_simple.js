// HTTP
// localhost:5000/
// localhost:5000/about
// localhost:5000/contact
const http = require("http")

const server = http.createServer((req, res) =>{
    console.log(req);
    res.write("Welcome to our home page")
    res.end()
})

server.listen(5000)