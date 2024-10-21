// import HTTP module (old, used on commonjs)
// const http = require("node:http");
// used on type module on package.json
import http from "node:http";

// HTTP METHODS
// GET, POST, PUT, PATCH, DELETE

// stateful vs stateless
// stateless app storages data externally like in a db

const users = []

const server = http.createServer((req, res) => {
    // esse codigo é igual a fazer duas const, uma method e um url e acessar as propriedades method e url de req, chama-se desestruturação
    const { method, url } = req

    console.log(req.headers);

    if (method == 'GET' && url == '/users'){
        // since it accepts string, we should use JSON
        return res
        .setHeader('Content-type', 'application/json')
        .end(String(JSON.stringify(users)))
    }
    if (method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john@email.com'
        })
        
        // returnin an HTTP code
        return res.writeHead(201).end()
    }

    console.log(method, url);

    return res.writeHead(404).end('404 - not found')
})

server.listen(3333)

// We will use status codes too. Mostly 200-299 for oks and 500-599 for errors