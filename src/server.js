// Importa o módulo HTTP (usado no modo CommonJS)
// const http = require("node:http");
// Usado no modo ES Module conforme definido no package.json
import http from "node:http";
import { json } from "./middlewares/json.js";

// MÉTODOS HTTP
// GET: Obter dados
// POST: Enviar dados
// PUT: Atualizar dados
// PATCH: Atualizar parcialmente dados
// DELETE: Excluir dados

// Aplicações stateful vs stateless
// Stateful: Armazena dados internamente (ex: em memória)
// Stateless: Armazena dados externamente (ex: em um banco de dados)

// Array para armazenar usuários (em memória, stateful)
const users = []

// Cria um servidor HTTP
const server = http.createServer(async (req, res) => {
    // Desestruturação: extrai as propriedades method e url do objeto req
    const { method, url } = req

    await json(req, res)
    
    // Loga os cabeçalhos da requisição no console
    console.log(req.headers);

    // Rota para obter usuários (GET /users)
    if (method === 'GET' && url === '/users') {
        // Define o cabeçalho Content-Type como application/json e envia a lista de usuários
        return res
            .end(JSON.stringify(users))
    }

    // Rota para criar um novo usuário (POST /users)
    if (method === 'POST' && url === '/users') {
        // Extrai name e email do corpo da requisição
        const { name, email } = req.body
        // Adiciona o novo usuário ao array users
        users.push({ name, email })
        
        // Retorna o código HTTP 201 (Created)
        return res.writeHead(201).end()
    }

    // Loga o método e a URL da requisição no console
    console.log(method, url);

    // Retorna o código HTTP 404 (Not Found) para rotas não definidas
    return res.writeHead(404).end('404 - not found')
})

// Faz o servidor escutar na porta 3333
server.listen(3333)

// Usamos códigos de status HTTP para indicar o resultado das operações
// 200-299: Sucesso
// 400-499: Erros do cliente (ex: 404 Not Found)
// 500-599: Erros do servidor